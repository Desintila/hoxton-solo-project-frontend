import { useEffect, useState } from "react"
import Aside from "../../components/Aside"
import './homepage.css'
function Homepage() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/videos')
            .then(resp => resp.json())
            .then(videos => setVideos(videos))
    }, [])


    return (

        <main>

            <Aside />
            <section className="content">
                <article className="video">

                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />

                    <div className="video-details">

                        <img className="video-avatar" src="https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s176-c-k-c0x00ffffff-no-rj" alt="" />

                        <div className="video-info">
                            <h3 className="title">Adele-Easy On Me</h3>
                            <div className="info">
                                <div className="channel-name">Adele</div>
                                <div className="views">260M Views · 5months ago</div>
                            </div>
                        </div>
                    </div>

                </article>
                <article className="video">

                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />

                    <div className="video-details">

                        <img className="video-avatar" src="https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s176-c-k-c0x00ffffff-no-rj" alt="" />

                        <div className="video-info">
                            <h3 className="title">Adele-Easy On Me</h3>
                            <div className="info">
                                <div className="channel-name">Adele</div>
                                <div className="views">260M Views · 5months ago</div>
                            </div>
                        </div>
                    </div>

                </article>
                <article className="video">

                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />

                    <div className="video-details">

                        <img className="video-avatar" src="https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s176-c-k-c0x00ffffff-no-rj" alt="" />

                        <div className="video-info">
                            <h3 className="title">Adele-Easy On Me</h3>
                            <div className="info">
                                <div className="channel-name">Adele</div>
                                <div className="views">260M Views · 5months ago</div>
                            </div>
                        </div>
                    </div>

                </article>
                <article className="video">

                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />

                    <div className="video-details">

                        <img className="video-avatar" src="https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s176-c-k-c0x00ffffff-no-rj" alt="" />

                        <div className="video-info">
                            <h3 className="title">Adele-Easy On Me</h3>
                            <div className="info">
                                <div className="channel-name">Adele</div>
                                <div className="views">260M Views · 5months ago</div>
                            </div>
                        </div>
                    </div>

                </article>
                <article className="video">

                    <img className="thumbnail" src="https://i.ytimg.com/vi/U3ASj1L6_sY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAUy4A8HQ0WMoqqFsTcuOSrLTguA" alt="" />

                    <div className="video-details">

                        <img className="video-avatar" src="https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s176-c-k-c0x00ffffff-no-rj" alt="" />

                        <div className="video-info">
                            <h3 className="title">Adele-Easy On Me</h3>
                            <div className="info">
                                <div className="channel-name">Adele</div>
                                <div className="views">260M Views · 5months ago</div>
                            </div>
                        </div>
                    </div>

                </article>
            </section>

        </main>

    )
}
export default Homepage