import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Tabs.css'

function Tabs({ onInputChange, onSubmit, setDescription, setThumbnail, setTitle, user }) {
    const [tab, setTab] = useState('home')
    const navigate = useNavigate()
    return (
        <section className="user-details">
            <div >
                <div className="tab-menu">
                    <button className={`tab ${tab === 'home' ? "active-tab" : ""}`} onClick={() => setTab('home')}>
                        HOME
                    </button>
                    <button className={`tab ${tab === 'videos' ? "active-tab" : ""}`} onClick={() => setTab('videos')}>
                        VIDEOS
                    </button>
                    <button className={`tab ${tab === 'community' ? "active-tab" : ""}`} onClick={() => setTab('community')}>
                        COMMUNITY
                    </button>
                </div>

                <div className="content-section">
                    <div className={`c
                     ${tab === 'home' ? "active-content" : ""}`}>
                        <form onSubmit={onSubmit} >
                            <input type="file" name="file" onChange={onInputChange} className="file" />
                            <label >Video Title
                                <input type="text" name="text" onChange={e => setTitle(e.target.value)} className="title-video" />
                            </label>
                            <label>Thumbnail
                                <input type="text" name="thumbnail" onChange={e => setThumbnail(e.target.value)} className="thumbnail-video" />
                            </label>
                            <label>Video Description
                                <input type="text" name="description" onChange={e => setDescription(e.target.value)} className="description-video" />
                            </label>
                            <button className="submit">Submit</button>
                        </form>
                    </div>

                    <div className={`c ${tab === 'videos' ? "active-content" : ""}`}>
                        <section className="content">
                            {
                                user.videos.map(video =>
                                    <article key={video.id} className="video" onClick={() => navigate(`/homepage/${video.id}`)}>

                                        <img className="thumbnail" src={video.thumbnail} alt="" />

                                        <div className="video-details">

                                            <img className="video-avatar" src={user.image} alt="" />

                                            <div className="video-info">
                                                <h3 className="title">{video.title}</h3>
                                                <div className="info">
                                                    <div className="channel-name">{user.firstName}</div>
                                                    <div className="views">260M Views · {video.createdAt}</div>
                                                </div>
                                            </div>
                                        </div>

                                    </article>
                                )
                            }
                        </section>
                    </div>

                    <div className={`c ${tab === 'community' ? "active-content" : ""}`}>
                        <h2>Share your posts</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs