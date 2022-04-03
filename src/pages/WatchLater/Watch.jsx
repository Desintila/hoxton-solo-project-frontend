import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside"
import './watch_later.css'

function Watch({ watchLater, setWatchLater }) {
    const navigate = useNavigate()


    useEffect(() => {
        if (localStorage.token) {
            fetch('http://localhost:4000/watch_later', {
                headers: {
                    Authorization: localStorage.token
                }
            }).then(resp => resp.json())
                .then(videos => setWatchLater(videos))
        }
    }, [])


    console.log(watchLater)
    return (
        <main>
            <Aside />
            <section className="watch-later">
                {
                    watchLater.map(video =>
                        <article className="watch-wrapper" key={video.id} onClick={() => navigate(`/homepage/${video.id}`)}>

                            <img src={video.video.thumbnail} alt="" />
                            <div className="watch">
                                <h4 className="title">{video.video.title}</h4>
                                <span className="channel-name">{video.video.user.firstName}</span>
                            </div>
                        </article>
                    )
                }

            </section>
        </main>
    )
}


export default Watch