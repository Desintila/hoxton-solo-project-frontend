import { useNavigate } from "react-router-dom"
import './login.css'
function Register({ setUser }) {
    const navigate = useNavigate()

    function signUp(firstName, lastName, email, password, image) {
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                image: image
            })
        }).then(resp => resp.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    setUser(data.user)
                    localStorage.token = data.token
                }

            })

    }
    function handleOnSubmit(e) {
        e.preventDefault()
        const firstName = e.target.name.value
        const lastName = e.target.lastname.value
        const email = e.target.email.value
        const password = e.target.password.value
        const image = e.target.photo.value
        signUp(firstName, lastName, email, password, image)
        navigate('/homepage')
    }

    return (
        <main className="register">
            <section className="register-section">
                <form onSubmit={(e) => handleOnSubmit(e)} className='signup-form'>
                    <h2 className='register-title'>Register</h2>
                    <label className='labels'>First Name
                        <input type='text' name='name' placeholder='First Name' required />
                    </label>
                    <label className='labels'>Last Name
                        <input type='text' name='lastname' placeholder='Last Name' required />
                    </label>
                    <label className='labels'>Email
                        <input type='email' name='email' placeholder='Email' required />
                    </label>
                    <label className='labels'>Password
                        <input type='password' name='password' placeholder='Password' required />
                    </label>
                    <label className='labels'> Photo
                        <input type='text' name='photo' placeholder='Photo' required />
                    </label>
                    <input type='submit' />
                </form>
            </section>

        </main>
    )

}

export default Register