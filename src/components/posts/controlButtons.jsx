import '../../App.css'
import { useNavigate } from 'react-router-dom'


function ControlButtons()
{
    const navigate = useNavigate();
    return(
        <div className="controlButtons" >
            <span className="home" onClick={() => navigate("/home")}>Home</span>
        </div>
    )
}

export default ControlButtons