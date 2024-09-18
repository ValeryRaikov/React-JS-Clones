import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { logout } from '../../firebase';

import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import dropdown_icon from '../../assets/caret_icon.svg';

export default function Navigation() {
    const navRef = useRef();
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState(false);
    const [query, setQuery] = useState('');

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDIwNjk5YzQ5NWRmNWE4NjI4OTUxOTIyNjhkOTUyYyIsIm5iZiI6MTcyNjQyMDExNS4wNjgyNSwic3ViIjoiNjZlNzEwY2NlODIxMWVjZDIyYjA5ZGQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.02YGEc_ntAMKY-9wmnBBWnMfwHXrt3JpGQNyaXdDNWs'
        }
    };

    const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

    const searchHandler = async function() {
        if (!query) {
            return;
        }

        fetch(URL, options)
            .then(response => response.json())
            .then(data => navigate('/search', { state: { results: data.results } }))
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark');
            } else {
                navRef.current.classList.remove('nav-dark');
            }
        });

        return () => window.removeEventListener('scroll', () => {});
    }, []);

    return (
        <div ref={navRef} className="navigation">
            <div className="navigation-left">
        	    <img src={logo} alt="" />
                <ul>
                    <Link to='/' >Home</Link>
                    <Link to='/tv-shows' state={{ category: 'Tv Shows' }}>Tv Shows</Link>
                    <Link to='/movies' state={{ category: 'Movies' }}>Movies</Link>
                    <Link to='/new&popular' state={{ category: 'New & Popular' }}>New & Popular</Link>
                    <Link>My List</Link>
                    <Link to='/browse'>Browse by Languages</Link>
                </ul>
            </div>
            <div className="navigation-right">
                {searchInput && 
                    <div>
                        <input 
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            type="text" 
                            placeholder="Search movie" 
                            className="search-box" 
                        />
                        <button onClick={searchHandler} type="submit">Search</button>
                    </div>
                }
                <img onClick={() => setSearchInput(prev => !prev)} className="icons" src={search_icon} alt="" />
                <p>Children</p>
                <img className="icons" src={bell_icon} alt="" />
                <div className="navigation-profile">
                    <img className="profile" src={profile_img} alt="" />
                    <img src={dropdown_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={() => logout()}>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
}