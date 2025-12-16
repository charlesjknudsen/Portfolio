import SideBar from '../components/posts/sideBar.jsx';
import TopBar from '../components/posts/topBar.jsx';
import CenterText from '../components/posts/centerText.jsx';
import NavButtons from '../components/posts/navButtons.jsx';

import NavBar from '../components/home/navbar.jsx';
import { useState } from "react";

function Posts() {
    const [currentId, setCurrentId] = useState(1);

    return (
        <div>
            <NavBar />
            <TopBar currentId={currentId}/>
            <SideBar setCurrentId={setCurrentId}/>
            <CenterText currentId={currentId}/>
            <NavButtons setCurrentId={setCurrentId}/>
        </div>
    );
}

export default Posts;