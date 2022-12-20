import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteVideo({ message, setMessage }) {

    const [video, setVideo] = useState([]);
    const [videoId, setVideoId] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState(false);

    const getVideo = () => {
        axios
            .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/videos`)
            .then((res) => {
                setVideo(res.data)

            })
            .catch(() => {
                console.error("video not found");
            });
    }

    useEffect(() => {
        getVideo();
    }, [message]);


    const deleteVideo = () => {
        axios
            .delete(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/videos/${videoId}`)
            .then(() =>
                setDeleteMessage(true))
            .catch(() => {
                console.error("video not found");
            });
    }

    return (
        <div className="delete_video_container">
            <h2>Delete a video</h2>
            <div className='delete_video_selection'>
                {video.length > 0 &&
                    <select
                        className='delete_video_select'
                        onChange={(e) => setVideoId(e.target.value)}
                    >
                        <option value="">---</option>
                        {video.map((v) => (
                            <option value={v.id}>{v.title}</option>
                        ))}
                    </select>}

                <button type='button' onClick={deleteVideo}>Delete video</button>
            </div>

            <div className={deleteMessage ? "delete_message" : "delete_message_not"} >
                <h2>
                    Video has been deleted!
                </h2>
            </div>

        </div >
    )
}

export default DeleteVideo;