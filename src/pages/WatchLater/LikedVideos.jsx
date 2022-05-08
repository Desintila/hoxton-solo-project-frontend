import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside"
import './watch_later.css'

function Liked({ likedVideos, setLikedVideos, user }) {
    const navigate = useNavigate()


    useEffect(() => {
        if (localStorage.token) {
            fetch('http://localhost:4000/likedVideos', {
                headers: {
                    Authorization: localStorage.token
                }
            }).then(resp => resp.json())
                .then(videos => setLikedVideos(videos))
        }
    }, [])

    if (user != null) {
        return (
            <main>
                <Aside />
                <section className="watch-later">
                    {
                        likedVideos.map(video =>
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
    } else {
        return <main><Aside />
            You need to login</main>
    }
}


export default Liked