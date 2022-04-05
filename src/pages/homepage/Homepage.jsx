import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside"
import './homepage.css'
function Homepage({ videos, setVideos }) {

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:4000/videos')
            .then(resp => resp.json())
            .then(videos => setVideos(videos))
    }, [])
    console.log(videos)


    return (

        <main>

            <Aside />
            <section className="content">
                {
                    videos.map(video =>
                        <article key={video.id} className="video" onClick={() => navigate(`/homepage/${video.id}`)}>

                            <img className="thumbnail" src={video.thumbnail} alt="" />

                            <div className="video-details">

                                <img className="video-avatar" src={video.user.image} alt="" />

                                <div className="video-info">
                                    <h3 className="title">{video.title}</h3>
                                    <div className="info">
                                        <div className="channel-name">{video.user.firstName}</div>
                                        <div className="views">260M Views · {video.createdAt}</div>
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