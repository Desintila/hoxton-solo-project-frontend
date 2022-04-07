import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Aside from "../components/Aside"
import '../style/trending.css'

function Trending({ trending, setTrending }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.token) {
            fetch('http://localhost:4000/trending', {
                headers: {
                    Authorization: localStorage.token
                }
            }).then(resp => resp.json())
                .then(videos => setTrending(videos))
        }
    }, [])
    console.log(trending)
    return (
        <main>
            <Aside />
            <section className="trending">
                <h3>Trendings</h3>
                {
                    trending.map(video =>
                        <article className="trending-article" key={video.id} onClick={() => navigate(`/homepage/${video.id}`)}>

                            <img src={video.thumbnail} alt="" />
                            <div className="watch">
                                <h4 className="title">{video.title}</h4>
                                <div>
                                    <span className="channel-name">{video.user.firstName}</span>
                                    <h5 className="channel-name">{video.Video_Views.length} views</h5>
                                </div>
                            </div>
                        </article>
                    )
                }

            </section>
        </main>
    )
}
export default Trending