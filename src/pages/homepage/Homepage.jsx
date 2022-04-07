import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside"
import './homepage.css'
function Homepage({ videos, setVideos, video, setVideo }) {

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:4000/videos')
            .then(resp => resp.json())
            .then(videos => setVideos(videos))
    }, [])

    function view(video) {
        fetch(`http://localhost:4000/video_views`, {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ videoId: video.id })
        }).then(resp => resp.json())
            .then((data) => {
                const updated = JSON.parse(JSON.stringify(video))
                updated.Video_Views.push(data)
                setVideo(updated)
            })
    }


    function OnClick(video) {
        view(video)
        navigate(`/homepage/${video.id}`)
    }
    function dateFormat(video) {
        const date = Date.parse(video.createdAt)
        const d = new Date(date).toLocaleDateString()
        return d
    }
    return (

        <main>

            <Aside />
            <section className="content">
                {
                    videos.map(video =>
                        <article key={video.id} className="video" onClick={() => OnClick(video)}>

                            <img className="thumbnail" src={video.thumbnail} alt="" />

                            <div className="video-details">

                                <img className="video-avatar" src={video.user.image} alt="" />

                                <div className="video-info">
                                    <h3 className="title">{video.title}</h3>
                                    <div className="info">
                                        <div className="channel-name">{video.user.firstName}</div>
                                        <div className="views">{video.Video_Views.length} views · {`${dateFormat(video)}`}</div>
                                    </div>
                                </div>
                            </div>

                        </article>
                    )
                }

            </section>

        </main>

    )
}
export default Homepage