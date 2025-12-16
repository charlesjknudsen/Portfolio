import '../../App.css';
import { useEffect, useState } from "react";

/* we don't want the nav buttons to navigate by changing the id, but rather by navigating through the sorted date list of posts */
/* we need a helper function to sort our posts by date */
function sortAll(data)
{
    if (!Array.isArray(data)) return [];

    const sortedDate = [...data].sort((a, b) => {
        if(b.year !== a.year) return b.year - a.year;
        if(a.month !== b.month) return a.month - b.month;
        return a.day - b.day;
    });
    return sortedDate.map(post => post.id);
}

function NavButtons({setCurrentId}) 
{
    const [metadata, setMetadata] = useState(null);

    /* fetch our data */
    useEffect(() => {
        fetch("/metadata/posts.json")
            .then(res => res.json())
            .then(setMetadata);
    }, []);

    /* guard, if metadata is null (false), then set it to an empty array, [] */
    const sorted = metadata ? sortAll(metadata) : [];

    return(
        <div className="buttonContainer">
            <button className="previous" onClick={()=>{setCurrentId(prevId => {
                    const index = sorted.indexOf(prevId); // find current position
                    if(index - 1 < 0) return prevId; // prevent going out of bounds
                    return sorted[index - 1]; // move backward
                })}}>Previous
            </button>
            <button className="next" onClick={()=>{setCurrentId(prevId => {
                    const index = sorted.indexOf(prevId); // find current position
                    if(index + 1 > sorted.length - 1) return prevId; // prevent going out of bounds
                    return sorted[index + 1]; // move forward
                })}}>Next
            </button>
        </div>
    )
}

export default NavButtons