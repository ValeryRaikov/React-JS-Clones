import { v2 as cloudinary } from "cloudinary";

import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: 'video' });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration,
        }

        const song = songModel(songData);
        await song.save();

        res.json({
            success: true,
            message: 'Song added successfully',
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: 'Error adding song',
        });
    }
}

const listSongs = async (req, res) => {
    try {
        const allSongs = await songModel.find({});

        res.json({
            success: true,
            songs: allSongs,
        });
    } catch (error) {
        res.json({
            success: false,
        });
    }
}

const updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, desc, album } = req.body;

        let updatedData = {
            name,
            desc,
            album,
        };

        if (req.files.audio) {
            const audioFile = req.files.audio[0];
            const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: 'video' });
            updatedData.file = audioUpload.secure_url;
            updatedData.duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;
        }

        if (req.files.image) {
            const imageFile = req.files.image[0];
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            updatedData.image = imageUpload.secure_url;
        }

        const updatedSong = await songModel.findByIdAndUpdate(id, updatedData, { new: true });

        res.json({
            success: true,
            message: 'Song updated successfully',
            song: updatedSong,
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error updating song',
        });
    }
}

const removeSong = async (req, res) => {
    try {
        await songModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: 'Song removed successfully',
        });
    } catch (error) {
        res.json({
            success:false,
        });
    }
}

export {
    addSong, 
    listSongs, 
    updateSong,
    removeSong,
};