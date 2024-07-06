import { useNavigate, Link } from "react-router-dom"
import "./mainheader.css"

const MainHeader = () => {
    const handleData = () => {
        navigate("/create")
      }
    return (
    <div>
        <div className="navbuttons">
            <button >
            <Link to={"offstate"}>Articles</Link>
            </button>
            <button><Link to={"create"}>Create articles</Link></button>
        </div>
    
    </div>
    )
}

export default MainHeader;