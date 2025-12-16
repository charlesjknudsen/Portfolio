import '../../App.css';
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();
    return(
        <div className="navBarContainer">
            <div className="navBar">
                <span className="navBar_btn" onClick={() => navigate("/home")}>Home</span>
                <span className="navBar_btn" onClick={() => navigate("/post")}>Posts</span>
                <span className="navBar_btn" onClick={() => navigate("/project")}>Projects</span>
                <span className="navBar_signIn">Sign In</span>
            </div>
        </div>
    )
}

export default NavBar