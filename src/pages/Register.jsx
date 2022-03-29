import { useNavigate } from "react-router-dom"

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
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <h2>Register</h2>
                <input type='text' name='name' placeholder='FirstName' />
                <input type='text' name='lastname' placeholder='LastName' />
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Password' />
                <input type='text' name='photo' placeholder='Photo' />
                <input type='submit' />
            </form>
        </main>
    )

}

export default Register