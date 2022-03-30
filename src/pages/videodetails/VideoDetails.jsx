import './videodetails.css'
function VideoDetails() {
    return (
        <main className='details-page'>
            <div className="selected-video">
                <iframe width="720" height="380" src="https://www.youtube.com/embed/U3ASj1L6_sY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <div className="video-title">
                    <a href="#">#Adele #EasyOnMe</a>
                    <h3>Adele - Easy On Me (Official Video)</h3>
                    <div className="date">
                        <span>260,588,400 views · Premiered Oct 15, 2021</span>
                        <div className="user-actions">
                            <ul>
                                <li><button> <img src="../src/assets/like.svg" alt="" /></button>6M</li>
                                <li><button><img src="../src/assets/dislike.svg" alt="dislike icon" /></button>DISLIKE</li>
                                <li><button><img src="../src/assets/share.svg" alt="share icon" /> </button>SHARE</li>
                                <li><button><img src="../src/assets/save.svg" alt="save icon" /></button>SAVE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommendations">
                <div className="chat">
                    Chat Replay is disabled for this Premiere.
                </div>
                <div className="recommendation-video">
                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />
                    <div className="recommendation-info">
                        <h4 className="title">Adele-Easy On Me</h4>
                        <p className="info">Adele</p>
                        <p className="info">260M Views · 5months ago </p>
                    </div>
                </div>
                <div className="recommendation-video">
                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />
                    <div className="recommendation-info">
                        <h4 className="title">Adele-Easy On Me</h4>
                        <p className="info">Adele</p>
                        <p className="info">260M Views · 5months ago </p>
                    </div>
                </div>
                <div className="recommendation-video">
                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />
                    <div className="recommendation-info">
                        <h4 className="title">Adele-Easy On Me</h4>
                        <p className="info">Adele</p>
                        <p className="info">260M Views · 5months ago </p>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default VideoDetails