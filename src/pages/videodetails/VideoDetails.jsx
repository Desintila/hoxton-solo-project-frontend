import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './videodetails.css'

function VideoDetails({ user, setUser, watchLater, setWatchLater, videos }) {
    const [video, setVideo] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4000/videos/${params.id}`)
            .then(resp => resp.json())
            .then(video => setVideo(video))
    }, [])

    function like(video) {
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
                    const updated = JSON.parse(JSON.stringify(video))
                    updated.video_likes.push(data)
                    setVideo(updated)
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
                    const updated = JSON.parse(JSON.stringify(video))
                    updated.video_dislikes.push(data)
                    setVideo(updated)
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
    }


    function watch(video) {
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




    console.log(video)
    if (video === null) return <h1>Loading...</h1>
    return (
        <main className='details-page'>
            <div className="selected-video">
                <video controls width="720" height="380" autoPlay>

                    <source src="http://localhost:4000/public/video1.mp4" type="video/mp4" />
                </video>
                <div className="video-title">
                    <a href="#">#Adele #EasyOnMe</a>
                    <h3>{video.title}</h3>
                    <div className="date">
                        <span>260,588,400 views · {video.createdAt}</span>
                        <div className="user-actions">
                            <ul>
                                <li><button onClick={() => like(video)} className='icons'> <img src="../src/assets/like.svg" alt="" /></button>{video.video_likes.length}</li>
                                <li><button onClick={() => dislike(video)} className='icons'> <img src="../src/assets/dislike.svg" alt="dislike icon" /></button>DISLIKE</li>
                                <li><button className='icons'><img src="../src/assets/share.svg" alt="share icon" /> </button>SHARE</li>
                                <li><button onClick={() => watch(video)} className='icons'><img src="../src/assets/save.svg" alt="save icon" /></button>SAVE</li>
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
                    <button onClick={() => subscribe(video.user)}>SUBSCRIBE</button>
                </div>
                <div className='video-comments'>
                    <div>
                        <form className="comment-form" onSubmit={(event) => addComment(event, video.id)}>
                            <input type="text"
                                name="comment"
                                className="comment-input"
                                placeholder="Add a comment" />
                            <button className="comment-button" type="submit">ADD</button>
                        </form>
                        <h5>Comments</h5>
                        <div>{video.comments.map(comment => <p key={comment.id}>{comment.commentText}</p>)}</div>
                    </div>
                </div>
            </div>
            <div className="recommendations">
                {videos.map(video =>
                    <div className="recommendation-video">
                        <img className="thumbnail" src={video.thumbnail} alt="" />
                        <div className="recommendation-info">
                            <h4 className="title">{video.title}</h4>
                            <p className="info">{video.user.firstName}</p>
                            <p className="info">260M Views · {video.createdAt} </p>
                        </div>
                    </div>
                )}

            </div>
        </main>
    )
}
export default VideoDetails