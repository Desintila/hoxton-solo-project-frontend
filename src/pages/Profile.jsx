import { useState } from "react";
import Aside from "../components/Aside";

function Profile() {
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

    return (
        <main>
            <Aside />
            <section>
                <form onSubmit={onSubmit} >
                    <input type="file" name="file" onChange={onInputChange} />
                    <input type="text" name="text" onChange={e => setTitle(e.target.value)} />
                    <input type="text" name="thumbnail" onChange={e => setThumbnail(e.target.value)} />
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)} />
                    <button>Submit</button>
                </form>

            </section>
        </main>
    )
}
export default Profile