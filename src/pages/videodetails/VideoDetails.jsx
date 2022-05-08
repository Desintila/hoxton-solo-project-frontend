import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './videodetails.css'
import FocusedContent from "react-switch-off-light";
import Recommendations from '../../components/Recommendations';

function VideoDetails({ user, setUser, watchLater, setWatchLater, videos, video, setVideo }) {

    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:4000/videos/${params.id}`)
            .then(resp => resp.json())
            .then(video => setVideo(video))
    }, [params.id])

    function like(video, user) {
        if (user !== null) {
            fetch(`http://localhost:4000/video_likes`, {
                method: 'POST',
                headers: {
                    Authorization: localStorage.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ videoId: video.id })
            }).then(resp => resp.json())
                .then((data) => {
                    if (data.error) {
                        alert(data.error)
                    }
                    else {
                        const updated = JSON.parse(JSON.stringify(video))
                        updated.video_likes.liked = true
                        updated.video_likes.push(data)
                        setVideo(updated)
                    }
                })

        }
        else {
            alert('You need to login')
        }
    }
    function commentLike(comment) {
        if (user !== null) {
            fetch(`http://localhost:4000/comment_likes`, {
                method: 'POST',
                headers: {
                    Authorization: localStorage.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ commentId: comment.id })
            }).then(resp => resp.json())
                .then((data) => {
                    if (data.error) {
                        alert(data.error)
                    }
                    else {
                        const updated = JSON.parse(JSON.stringify(video))
                        const commentIndex = updated.comments.findIndex(item =>
                            item.id === comment.id)
                        updated.comments[commentIndex].comment_likes.push(data)
                        setVideo(updated)
                    }
                })
        }
        else {
            alert('You need to login')
        }
    }

    function commentDisLike(comment) {
        if (user !== null) {


            fetch(`http://localhost:4000/comment_dislikes`, {
                method: 'POST',
                headers: {
                    Authorization: localStorage.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ commentId: comment.id })
            }).then(resp => resp.json())
                .then((data) => {
                    if (data.error) {
                        alert(data.error)
                    }
                    else {
                        const updated = JSON.parse(JSON.stringify(video))
                        const commentIndex = updated.comments.findIndex(item =>
                            item.id === comment.id)
                        updated.comments[commentIndex].comment_dislikes.push(data)
                        setVideo(updated)
                    }
                })
        }
        else {
            alert('You need to login')
        }
    }

    function dislike(video) {
        if (user !== null) {
            fetch(`http://localhost:4000/video_dislikes`, {
                method: 'POST',
                headers: {
                    Authorization: localStorage.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ videoId: video.id })
            }).then(resp => resp.json())
                .then((data) => {
                    if (data.error) {
                        alert(data.error)
                    }
                    else {
                        const updated = JSON.parse(JSON.stringify(video))
                        updated.video_dislikes.push(data)
                        setVideo(updated)
                    }
                })
        }
        else {
            alert('You need to login')
        }
    }

    function addComment(event, id) {
        event.preventDefault()
        const commentText = event.target.comment.value
        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentText: commentText, videoId: id })
        })
            .then(resp => resp.json())
            .then((data) => {
                const updated = JSON.parse(JSON.stringify(video))
                updated.comments.push(data)
                setVideo(updated)
            })
        event.target.reset()
    }


    function watch(video) {
        if (user !== null) {
            fetch('http://localhost:4000/watch_later', {
                method: 'POST',
                headers: {
                    Authorization: localStorage.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ videoId: video.id })
            })
                .then(resp => resp.json())
                .then((data) => {
                    const updated = JSON.parse(JSON.stringify(watchLater))
                    updated.push(data)
                    setWatchLater(updated)

                })
        }
        else {
            alert('You need to login')
        }
    }

    function subscribe(user) {
        fetch(`http://localhost:4000/subscribe`, {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ subscribeId: user.id })
        }).then(resp => resp.json())
            .then(updatedUser => setUser(updatedUser))

    }


    function dateFormat(video) {
        const date = Date.parse(video.createdAt)
        const d = new Date(date).toLocaleDateString()
        return d
    }

    console.log(video)
    if (video === null) return <h1>Loading...</h1>
    return (

        <FocusedContent.LightZone>
            <main className='details-page'>

                <div className="selected-video">
                    <div>
                        <FocusedContent.Component>

                            <video controls width="720" height="380" autoPlay src={`http://localhost:4000/${video.url}`}>
                            </video>
                        </FocusedContent.Component>
                    </div>
                    <div className="video-title">
                        <ul>{

                            video.videoTags.map(tag =>

                                <li className='tag'>#{tag.hashTag.name}</li>
                            )}
                        </ul>
                        <h3>{video.title}</h3>

                        <div className="date">

                            <span>{video.Video_Views.length} views · {`${dateFormat(video)}`}</span>

                            <div className="user-actions">
                                <ul>
                                    <li><button onClick={() => { like(video, user) }} className='icons'>{video.video_likes.liked === true ? <img src="../src/assets/liked.svg" alt=" icon" /> : <img src="../src/assets/like.svg" alt="" />}</button>{video.video_likes.length}</li>
                                    <li><button onClick={() => dislike(video)} className='icons'> <img src="../src/assets/dislike.svg" alt="dislike icon" /></button>DISLIKE</li>
                                    <li><button onClick={() => watch(video)} className='icons'><img src="../src/assets/save.svg" alt="save icon" /></button>SAVE</li>
                                    <li><button className='switch' onClick={() => FocusedContent.switchOff()}> Switch Off Light</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='subscribing-channel'>
                        <img className="video-avatar" src={video.user.image} alt="" />
                        <div>
                            <h4>{video.user.firstName}</h4>
                            <p>{video.description}</p>
                        </div>
                        <button onClick={() => { user ? subscribe(video.user) : alert('You need to login') }}>SUBSCRIBE</button>
                    </div>


                    <div className='video-comments'>

                        <div>
                            <h3>{video.comments.length} comments</h3>
                            {user ? <div className='user-commenting'>
                                <img className="video-avatar" src={user.image} alt="" />
                                <form className="comment-form" onSubmit={(event) => addComment(event, video.id)}>
                                    <input type="text"
                                        name="comment"
                                        className="comment-input"
                                        placeholder={`Commenting as ${user.firstName} `} />
                                    <button className="comment-button" type="submit">ADD</button>
                                </form>
                            </div> : null}
                            <div>
                                {video.comments.map(comment =>
                                    <div key={comment.id} className="commented-div">
                                        <img className="video-avatar" src={comment.user.image} alt="" />
                                        <div className='comment-info'>
                                            <span>{comment.commentText}</span>
                                            <ul className='comment-like'>
                                                <li><button onClick={() => commentLike(comment)} className='icons'> <img src="../src/assets/like.svg" alt="" /></button>{comment.comment_likes.length}</li>
                                                <li><button onClick={() => commentDisLike(comment)} className='icons'> <img src="../src/assets/dislike.svg" alt="dislike icon" /></button>DISLIKE</li>

                                            </ul></div>
                                    </div>)}</div>
                        </div>
                    </div>

                </div>
                <Recommendations />
            </main>
        </FocusedContent.LightZone>
    )

}
export default VideoDetails