import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LeftDrawer from "./Drawer";


function Header({ user, setUser, searched, setSearch }) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);



    const handleDrawer = () => {
        setOpen(!open)
    }

    function logout() {
        localStorage.removeItem('token')
        setUser(null)
    }

    function search(event) {
        event.preventDefault()
        const searchedText = event.target.searchInput.value
        fetch('http://localhost:4000/search', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ searchedText: searchedText })
        })
            .then(resp => resp.json())
            .then((data) => setSearch(data))
        navigate('/search')
    }



    console.log(searched)
    return (
        <header>
            <div className="logo">
                <button className="hamburger-icon" onClick={handleDrawer}> <img src="src/assets/menu.svg" alt="Hamburger icon" /></button>

            </div>
            <form onSubmit={(event) => search(event)}>
                <input type="search" placeholder="Search" name="searchInput" className="search" />
            </form>
            {user ? <div>
                <h4 onClick={() => navigate('/profile')}>{user.firstName}</h4>
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