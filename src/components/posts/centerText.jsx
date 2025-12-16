import '../../App.css';
import { useEffect, useState } from "react";

function CenterText({ currentId }) {
    const [metadata, setMetadata] = useState(null);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch("/metadata/posts.json")
            .then(res => res.json())
            .then(setMetadata);
    }, []);

    // The question mark makes this a condition, because metadata may be undefined at first
    const currentPost = metadata?.find(post => post.id === currentId);

    useEffect(() => {
        if (!currentPost) return; // we need currentPost to load first
        fetch(`/posts/${currentPost.file}.txt`)
            .then(res => res.text())
            .then(setText);
    }, [currentPost]); // run when currentPost changes
    
    // guard if currentPost doesn't load right away
    if(!currentPost) {
        return <div>Loading...</div>
    }

    return(
    <div className="CenterText">
        <div className="CenterTextContainer" style={{whiteSpace:"pre-wrap", overflowY:"scroll"}}>{text}</div>
    </div>
    )
}

export default CenterText