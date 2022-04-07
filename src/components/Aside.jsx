

import { useNavigate } from "react-router-dom"

function Aside() {
    const navigate = useNavigate()
    return (
        <aside className="menu">
            <ul className="aside-menu">
                <li onClick={() => navigate('/homepage')}><img src="../src/assets/home.svg" /> Home </li>
                <li onClick={() => navigate('/trending')}><img src="../src/assets/explore.svg" />Explore</li>
                <li onClick={() => navigate('/subscriptions')}><img src="../src/assets/subscriptions.svg" />Subscriptions</li>
                <li onClick={() => navigate('/watchlater')}> <img src="../src/assets/subscriptions.svg" />Watch Later</li>
            </ul>
        </aside>

    )
}
export default Aside