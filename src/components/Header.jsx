import { useNavigate } from "react-router-dom"

function Header({ user, setUser }) {
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <header>
            <div className="logo">
                <button className="hamburger-icon"> <img src="src/assets/menu.svg" alt="Hamburger icon" /></button>
                <button className="youtube-logo"> <img src="src/assets/logo.svg" alt="Youtube Logo" /></button>
            </div>

            <input type="search" placeholder="Search" className="search" />
            {user ? <div>
                <h4>{user.firstName}{user.lastName}</h4>
                <button onClick={() => logout()}>Logout</button>
            </div> : <button className="settings" onClick={() => navigate('login')}>
                <img src="src/assets/profile.svg" alt="profile" />
                <span>Sign in</span>
            </button>}
        </header>
    )
}

export default Header