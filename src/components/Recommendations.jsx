import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Recommendations({ videos, user }) {
    const navigate = useNavigate()
    const [recommend, setRecommend] = useState([])
    const params = useParams()
    useEffect(() => {
        if (localStorage.token) {
            fetch(`http://localhost:4000/allvideosexpectone/${params.id}`, {
                headers: {
                    Authorization: localStorage.token
                }
            }).then(resp => resp.json())
                .then(videos => setRecommend(videos))
        }
    }, [params.id])


    function dateFormat(video) {
        const date = Date.parse(video.createdAt)
        const d = new Date(date).toLocaleDateString()
        return d
    }
    if (user !== null) {
        return (
            <div className="recommendations">
                {recommend.map(video =>
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