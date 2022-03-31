import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './videodetails.css'

function VideoDetails({ user }) {
    const [video, setVideo] = useState(null)
    const params = useParams()

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



    console.log(video)
    if (video === null) return <h1>Loading...</h1>
    return (
        <main className='details-page'>
            <div className="selected-video">
                <iframe width="720" height="380" src={video.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <div className="video-title">
                    <a href="#">#Adele #EasyOnMe</a>
                    <h3>{video.title}</h3>
                    <div className="date">
                        <span>260,588,400 views · {video.createdAt}</span>
                        <div className="user-actions">
                            <ul>
                                <li><button onClick={() => like(video)}> <img src="../src/assets/like.svg" alt="" /></button>{video.video_likes.length}</li>
                                <li><button onClick={() => dislike(video)}><img src="../src/assets/dislike.svg" alt="dislike icon" /></button>DISLIKE</li>
                                <li><button><img src="../src/assets/share.svg" alt="share icon" /> </button>SHARE</li>
                                <li><button><img src="../src/assets/save.svg" alt="save icon" /></button>SAVE</li>
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
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="recommendations">
                <div className="chat">
                    Chat Replay is disabled for this Premiere.
                </div>
                <div className="recommendation-video">
                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />
                    <div className="recommendation-info">
                        <h4 className="title">Adele-Easy On Me</h4>
                        <p className="info">Adele</p>
                        <p className="info">260M Views · 5months ago </p>
                    </div>
                </div>
                <div className="recommendation-video">
                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />
                    <div className="recommendation-info">
                        <h4 className="title">Adele-Easy On Me</h4>
                        <p className="info">Adele</p>
                        <p className="info">260M Views · 5months ago </p>
                    </div>
                </div>
                <div className="recommendation-video">
                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />
                    <div className="recommendation-info">
                        <h4 className="title">Adele-Easy On Me</h4>
                        <p className="info">Adele</p>
                        <p className="info">260M Views · 5months ago </p>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default VideoDetails