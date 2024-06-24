import "../css/music.css";
import React, { useRef, useState, useEffect } from 'react';
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { ImPrevious } from "react-icons/im";
import { CgPlayTrackNextO } from "react-icons/cg";
import { LuRefreshCw } from "react-icons/lu";
import { TfiControlShuffle } from "react-icons/tfi";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

import mega2 from '../assets/2022/4.jpg';
import mega1 from '../assets/2021/6.jpeg';
import kodai1 from '../assets/music/musicimg1.png';
import kodai2 from '../assets/ki4/cover16.jpg';

function Music({ songs, theme }) {
    const nav = useNavigate();

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        const updateDuration = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        audio.pause();
        audio.load();
        if (isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.error("Failed to play audio: ", error));
            }
        }
    }, [currentSongIndex]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.error("Failed to play audio: ", error));
            }
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        audio.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleSeek = (event) => {
        const audio = audioRef.current;
        audio.currentTime = event.target.value;
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : songs.length - 1
        );
        setIsPlaying(false);
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex < songs.length - 1 ? prevIndex + 1 : 0
        );
        setIsPlaying(false);
    };

    const handleRefresh = () => {
        const audio = audioRef.current;
        audio.currentTime = 0;
        if (!isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.error("Failed to play audio: ", error));
            }
            setIsPlaying(true);
        }
    };

    const handleShuffle = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setCurrentSongIndex(randomIndex);
        setIsPlaying(false);
    };

    const css = theme === 'dark' ? {
        backgroundColor: "#530018"
    } : {
        backgroundColor: "#f2f2f2"
    };

    const latest = [
        {
            id: 1,
            event: "kodai Isai",
            year: "season 5",
            router: "/kodai-s5",
            albumArt: kodai1
        },
        {
            id: 2,
            event: "Kodai Isai",
            year: "season 4",
            router: "/kodai-s4",
            albumArt: kodai2
        },
        {
            id: 3,
            event: "Mega Isai",
            year: "season 6",
            router: "/2022",
            albumArt: mega2
        },
        {
            id: 4,
            event: "Mega Isai",
            year: "season 5",
            router: "/2021",
            albumArt: mega1
        },
    ];

    return (
        <div className="column-container" style={css}>
            <h3 className="p-2 font-bold">Latest Events</h3>
            <div className="music-sub-cont">
                {latest.map((season, index) => (
                    <div className="songs-container" key={index} onClick={() => { nav(`${season.router}`) }}>
                        <img src={season.albumArt} alt={`${season.event} album art`} />
                        <div className="music-btn-controls">
                            <div className="music-title-container">
                                <h3>{season.event}</h3>
                                <h4>{season.year}</h4>
                            </div>
                            <button className="play-btn"><MdNavigateNext className="" size={20} /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="music-card-container">
                <div className="music-card">
                    <img src={currentSong.albumArt} alt={`${currentSong.title} album art`} className="album-art" />
                    <div className="song-info">
                        <h2>{currentSong.title}</h2>
                        <p>{currentSong.artist}</p>
                        <div className="input-container">
                            <div className="time">{formatTime(currentTime)}</div>
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={handleSeek}
                            />
                            <div className="time">{formatTime(duration)}</div>
                        </div>
                    </div>
                    <div className="button-container">
                        <LuRefreshCw className="footer-icon" onClick={handleRefresh} />
                        <button className="button-container-sub-1" onClick={() => { handlePrevious(); handleRefresh() }}><ImPrevious /></button>
                        <button onClick={togglePlayPause} className="button-container-sub">
                            {!isPlaying ? <FaRegPlayCircle /> : <FaRegPauseCircle />}
                        </button>
                        <button className="button-container-sub-1" onClick={() => { handleNext(); handleRefresh() }}><CgPlayTrackNextO /></button>
                        <TfiControlShuffle className="footer-icon" onClick={() => { handleShuffle(); handleRefresh() }} />
                    </div>
                    <div onClick={toggleMute} className="sound">
                        {isMuted ? <GiSoundOff /> : <GiSoundOn />}
                    </div>
                    <audio ref={audioRef} src={currentSong.audioSrc}></audio>
                </div>
            </div>
        </div>
    );
}

export default Music;
