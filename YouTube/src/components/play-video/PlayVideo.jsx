import { useEffect, useState } from 'react';

import moment from 'moment';

import like from '../../assets/like.png';
import like_blue from '../../assets/like_blue.png';
import dislike from '../../assets/dislike.png';
import dislike_red from '../../assets/dislike_red.jpg';
import share from '../../assets/share.png';
import save from '../../assets/save.png';

import { API_KEY } from '../../data';
import { converter } from '../../utils';

import './PlayVideo.css';

export default function PlayVideo({ videoId }) {
    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const [videoLikeCount, setVideoLikeCount] = useState(0);
    const [videoLiked, setVideoLiked] = useState(false);
    const [videoDisliked, setVideoDisliked] = useState(false);
    const [commentLikes, setCommentLikes] = useState({});
    const [commentLikedStates, setCommentLikedStates] = useState({});
    const [error, setError] = useState('');

    const fetchVideoData = async () => {
        const videoDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        
        setError('');

        await fetch(videoDataUrl)
            .then(response => response.json())
            .then(data => setVideoData(data.items[0]))
            .catch(error => setError(error.message));
    };

    const fetchChannelData = async () => {
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.snippet.channelId}&key=${API_KEY}`;
        
        setError('');

        await fetch(channelDataUrl)
            .then(response => response.json())
            .then(data => setChannelData(data.items[0]))
            .catch(error => setError(error.message));
    };

    const fetchCommentData = async () => {
        const commentDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        
        setError('');

        await fetch(commentDataUrl)
            .then(response => response.json())
            .then(data => {
                setCommentData(data.items);

                const initialLikes = {};
                const initialLikedStates = {};

                data.items.forEach(item => {
                    const commentId = item.id;
                    initialLikes[commentId] = item.snippet.topLevelComment.snippet.likeCount;
                    initialLikedStates[commentId] = { liked: false, disliked: false };
                });

                setCommentLikes(initialLikes);
                setCommentLikedStates(initialLikedStates);
            })
            .catch(error => setError(error.message));
    };

    useEffect(() => {
        fetchVideoData();
    }, []);

    useEffect(() => {
        if (videoData) {
            fetchChannelData();
            fetchCommentData();
            setVideoLikeCount(videoData?.statistics.likeCount);
        }
    }, [videoData]);

    const videoLikeHandler = () => {
        if (!videoLiked) {
            setVideoLikeCount(prev => Number(prev) + 1);
            setVideoLiked(true);
            setVideoDisliked(false);
        }
    };

    const videoDislikeHandler = () => {
        if (!videoDisliked) {
            if (videoLiked) {
                setVideoLikeCount(prev => Number(prev) - 1);
            }

            setVideoLiked(false);
            setVideoDisliked(true);
        }
    };

    const commentLikeHandler = (commentId) => {
        setCommentLikedStates(prevStates => {
            const updatedStates = { ...prevStates };
            const currentState = updatedStates[commentId];

            if (!currentState.liked) {
                setCommentLikes(prevLikes => ({
                    ...prevLikes,
                    [commentId]: (prevLikes[commentId] || 0) + 1
                }));
                currentState.liked = true;
                currentState.disliked = false;
            }

            return updatedStates;
        });
    };

    const commentDislikeHandler = (commentId) => {
        setCommentLikedStates(prevStates => {
            const updatedStates = { ...prevStates };
            const currentState = updatedStates[commentId];

            if (currentState.liked) {
                setCommentLikes(prevLikes => ({
                    ...prevLikes,
                    [commentId]: (prevLikes[commentId] || 0) - 1
                }));
                
                currentState.liked = false;
            }

            if (!currentState.disliked) {
                currentState.disliked = true;
            }

            return updatedStates;
        });
    };

    return (
        <div className="play-video">
            {error && <p className="error-msg">{error}</p>}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <h3>{videoData?.snippet.title}</h3>
            <div className="play-video-info">
                <p>{converter(videoData?.statistics.viewCount)} views &bull; {moment(videoData?.snippet.publishedAt).fromNow()}</p>
                <div>
                    <span>
                        <img
                            src={videoLiked ? like_blue : like}
                            onClick={videoLikeHandler}
                            style={{ cursor: videoLiked ? 'not-allowed' : 'pointer' }}
                        />
                        {converter(videoLikeCount)}
                    </span>
                    <span>
                        <img
                            src={videoDisliked ? dislike_red : dislike}
                            onClick={videoDislikeHandler}
                            style={{ cursor: videoDisliked ? 'not-allowed' : 'pointer' }}
                        />
                    </span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?.snippet.thumbnails.default.url} alt="channel" />
                <div>
                    <p>{videoData?.snippet.channelTitle}</p>
                    <span>{converter(channelData?.statistics.subscriberCount)} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{videoData?.snippet.description}</p>
                <hr />
                <h4>{converter(videoData?.statistics.commentCount)} comments</h4>
                {commentData.map(item => {
                    const commentId = item.id;
                    const { liked, disliked } = commentLikedStates[commentId] || {};
                    const likeCount = commentLikes[commentId] || item.snippet.topLevelComment.snippet.likeCount;

                    return (
                        <div key={commentId} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="author" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img
                                        src={liked ? like_blue : like}
                                        onClick={() => commentLikeHandler(commentId)}
                                        style={{ cursor: liked ? 'not-allowed' : 'pointer' }}
                                    />
                                    <span>{converter(likeCount)}</span>
                                    <img
                                        src={disliked ? dislike_red : dislike}
                                        onClick={() => commentDislikeHandler(commentId)}
                                        style={{ cursor: disliked ? 'not-allowed' : 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}