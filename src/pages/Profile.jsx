import { useState } from "react";
import Aside from "../components/Aside";
import Tabs from "../components/Tabs";

function Profile({ user }) {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [description, setDescription] = useState("")

    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("url", file)
        formData.append("description", description)
        formData.append("title", title)
        formData.append("thumbnail", thumbnail)

        await fetch('http://localhost:4000/video', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token
            },
            body: formData
        })
            .then(resp => resp.json())



    }
    console.log(user)
    return (
        <main>
            <Aside />
            <section>
                <div className="user-info" >

                    <img className="video-avatar" src={user.image} alt="" />
                    <div >
                        <div >{user.firstName}</div>  <div >{user.lastName}</div>
                        <h3>{user.subscribedBy.length} subscribers </h3>
                    </div>

                </div>
                <Tabs user={user} onSubmit={onSubmit} onInputChange={onInputChange} setTitle={setTitle} setDescription={setDescription} setThumbnail={setThumbnail} />


            </section>
        </main>
    )
}
export default Profile