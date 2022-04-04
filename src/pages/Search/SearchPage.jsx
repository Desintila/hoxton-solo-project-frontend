import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside"

function SearchPage({ searched, setSearch }) {
    const navigate = useNavigate()
    console.log(searched)
    return (
        <main>
            <Aside />
            <section className="watch-later">
                {

                    searched.map(video =>
                        <article className="watch-wrapper" key={video.id} onClick={() => navigate(`/homepage/${video.id}`)}>

                            <img src={video.thumbnail} alt="" />
                            <div className="watch">
                                <h4 className="title">{video.title}</h4>
                                <span className="channel-name">{video.user.firstName}</span>
                            </div>
                        </article>
                    )
                }

            </section>
        </main>
    )
}

export default SearchPage