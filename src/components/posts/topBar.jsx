import '../../App.css';
import { useEffect, useState } from "react";


function TopBar({ currentId }) {
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
        fetch("/metadata/posts.json")
            .then(res => res.json())
            .then(setMetadata);
    }, []);

    const currentPost = metadata?.find(post => post.id === currentId);

    if(!currentPost) {
        return <div>Loading...</div>
    }

    return(
       <div className="TopBar">
        <div className="TopBarContainer" key={currentPost.id}>
            {currentPost.title} by {currentPost.author_first} {currentPost.author_last}
        </div>
       </div> 
    )
}

export default TopBar