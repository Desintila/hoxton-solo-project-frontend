import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Tabs.css'

function Tabs({ onInputChange, onSubmit, setDescription, setThumbnail, setTitle, user, setUser }) {
    const [tab, setTab] = useState('home')
    const navigate = useNavigate()
    function addPost(event) {
        event.preventDefault()
        const text = event.target.post.value

        fetch('http://localhost:4000/post', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text })
        })
            .then(resp => resp.json())
            .then((data) => {
                const updated = JSON.parse(JSON.stringify(user))
                updated.Post.push(data)
                setUser(updated)
            })
        event.target.reset()
    }
    function dateFormat(video) {
        const date = Date.parse(video.createdAt)
        const d = new Date(date).toLocaleDateString()
        return d
    }

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
                                                    <div className="views">{video.Video_Views.length} views · {dateFormat(video)}</div>
                                                </div>
                                            </div>
                                        </div>

                                    </article>
                                )
                            }
                        </section>
                    </div>

                    <div className={`c ${tab === 'community' ? "active-content" : ""}`}>
                        <div className='user-commenting'>
                            <img className="video-avatar" src={user.image} alt="" />
                            <form className="comment-form" onSubmit={(event) => addPost(event)} >
                                <input type="text"
                                    name="post"
                                    className="comment-input"
                                    placeholder={`Share your posts`} />
                                <button className="comment-button" type="submit">ADD</button>
                            </form>
                        </div>
                        {
                            user.Post.map(post =>
                                <div key={post.id} className="commented-div">
                                    <img className="video-avatar" src={post.user.image} alt="" />
                                    <div className='comment-info'>
                                        <span>{post.text}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs