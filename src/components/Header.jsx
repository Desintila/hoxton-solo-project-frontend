import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LeftDrawer from "./Drawer";


function Header({ user, setUser }) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);



    const handleDrawer = () => {
        setOpen(!open)
    }

    function logout() {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <header>
            <div className="logo">
                <button className="hamburger-icon" onClick={handleDrawer}> <img src="src/assets/menu.svg" alt="Hamburger icon" /></button>
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
            <LeftDrawer open={open} handleDrawer={handleDrawer} />
        </header>
    )
}

export default Header