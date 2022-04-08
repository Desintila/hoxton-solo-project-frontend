import { useNavigate } from "react-router-dom"
import './login.css'
function Login({ setUser }) {
    const navigate = useNavigate()

    function login(email, password) {

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.setItem('token', data.token)
                    setUser(data.user)
                }
            })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
        navigate('/homepage')
    }

    return (
        <section className="login">
            <form onSubmit={(e) => handleOnSubmit(e)} className="login-form">
                <h2>Login</h2>
                <label htmlFor="">Email
                    <input type='email' name='email' placeholder='Email' />
                </label>
                <label htmlFor="">Password
                    <input type='password' name='password' placeholder='Password' />
                </label>
                <input type='submit' />
                <button onClick={() => navigate('/signup')}>Don't have an account?</button>
            </form>
        </section>

    )

}

export default Login