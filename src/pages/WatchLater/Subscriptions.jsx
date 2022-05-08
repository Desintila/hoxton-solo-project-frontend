import { useNavigate } from "react-router-dom"
import Aside from "../../components/Aside"

function Subscriptions({ user }) {
    const navigate = useNavigate()

    function OnClick(video) {
        navigate(`/homepage/${video.id}`)
    }
    if (user !== null) {
        return (
            <main>
                <Aside />
                <section className="content">
                    {
                        user.subscribing.map(user =>
                            user.videos.map(video =>
                                <article key={video.id} className="video" onClick={() => OnClick(video)}>

                                    <img className="thumbnail" src={video.thumbnail} alt="" />

                                    <div className="video-details">

                                        <img className="video-avatar" src={user.image} alt="" />

                                        <div className="video-info">
                                            <h3 className="title">{video.title}</h3>
                                            <div className="info">
                                                <div className="channel-name">{user.firstName}</div>
                                            </div>
                                        </div>
                                    </div>

                                </article>
                            ))
                    }

                </section>
            </main>
        )
    } else {
        return <main><Aside />
            You need to login</main>
    }

}
export default Subscriptions