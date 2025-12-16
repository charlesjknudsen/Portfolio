import '../../App.css'

function SideBarPost({information, setCurrentId})
{
    return(
        <div className="SideBarPost" onClick={()=>{setCurrentId(information.id)}}>
            {information.title}, {information.author_first[0]}. {information.author_last}, {information.month}/{information.day}
        </div>
    )
}

export default SideBarPost