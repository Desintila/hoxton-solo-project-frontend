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


    function deleteVideo(video) {
        fetch(`http://localhost:4000/watchlater/${video.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            }
        })

    }
    function removeVideo(video) {
        let updated = JSON.parse(JSON.stringify(watchLater))
        deleteVideo(video)
        updated = updated.filter(Video => Video.id !== video.id)
        setWatchLater(updated)

    }
    console.log(watchLater)
    return (
        <main>
            <Aside />
            <section className="watch-later">
                {
                    watchLater.map(video =>
                        <article className="watch-wrapper" key={video.id} >

                            <img src={video.video.thumbnail} alt="" />
                            <div className="watch">
                                <h4 className="title">{video.video.title}</h4>
                                <h5 className="channel-name">{video.video.user.firstName}</h5>
                                <button onClick={() => removeVideo(video)}>Remove</button>
                            </div>
                        </article>
                    )
                }

            </section>
        </main>
    )
}


export default Watch