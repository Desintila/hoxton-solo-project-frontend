

import { useNavigate } from "react-router-dom"

function Aside() {
    const navigate = useNavigate()
    return (
        <aside className="menu">
            <ul>
                <li onClick={() => navigate('/homepage')}> Home </li>
                <li onClick={() => navigate('/watchlater')}>Watch</li>
                <li>Subscriptions</li>
                <li onClick={() => navigate('/liked')}>Liked videos</li>
            </ul>
        </aside>

    )
}
export default Aside