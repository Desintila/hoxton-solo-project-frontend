import { useNavigate } from "react-router-dom"

function Recommendations({ videos, user }) {
    const navigate = useNavigate()
    function dateFormat(video) {
        const date = Date.parse(video.createdAt)
        const d = new Date(date).toLocaleDateString()
        return d
    }
    if (user !== null) {
        return (
            <div className="recommendations">
                {videos.map(video =>
                    <div className="recommendation-video" key={video.id} >
                        <img className="thumbnail" src={video.thumbnail} alt="" onClick={() => navigate(`/homepage/${video.id}`)} />
                        <div className="recommendation-info">
                            <h4 className="title">{video.title}</h4>
                            <p className="info">{video.user.firstName}</p>
                            <p className="info">{video.Video_Views.length} views  · {`${dateFormat(video)}`}</p>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}
export default Recommendations