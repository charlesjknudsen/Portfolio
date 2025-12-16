import '../../App.css';
import SideBarYear from './sideBarYear.jsx';
import SideBarPost from './sideBarPost.jsx';
import { useEffect, useState } from "react";

import ControlButtons from './controlButtons.jsx';
import Search from './search.jsx';

/* check for updates from the search bar */


/* we need a helper function to sort our posts by year */
function sortYear(data)
{
    if (!Array.isArray(data)) return [];

    /* .map will extract just the years, not any other information */
    const years = data.map(post => post.year);
    /* the new Set will take out just unique values */
    const unique = [...new Set(years)];

    return unique.sort((a, b) => b - a);
}

function sortMonth(a, b)
{
    if(a.month !== b.month) return a.month - b.month; // Ascending 
    return a.day - b.day;
}

function SideBar({setCurrentId}) {

    const [metadata, setMetadata] = useState(null);

    /* read in data from out search bar */ 
    const [searchText, setSearchText] = useState("");

    /* fetch our data */
    useEffect(() => {
        fetch("/metadata/posts.json")
            .then(res => res.json())
            .then(setMetadata);
    }, []);

    /* guard, if metadata is null (false), then set it to an empty array [] */
    const allData = metadata ? metadata : [];

    /* filter our display based on search bar */
    const filteredData = allData.filter((post) => {
        /* removes white space */
        if(!searchText.trim()) return true;
        
        return post.title
            .toLowerCase()
            .includes(searchText.toLowerCase());
    });

    /* now sort by year on filtered data */
    const sortedByYear = metadata ? sortYear(filteredData) : [];

    return(
        <div className="SideBar">
        <Search value={searchText} setValue={setSearchText} />
        <ul className="SideBarContainer">
            {sortedByYear.map((year) => {
                const postsForYear = filteredData.filter(post => post.year === year).sort(sortMonth)
                return(
                    <div>
                        <SideBarYear key={year} year={year}/>
                        {postsForYear.map((post) => {return <SideBarPost key={post.id} setCurrentId={setCurrentId} information={post}/>})}
                    </div>
                )
            })}
        </ul>
        <ControlButtons/>
        </div>
    );
}

export default SideBar;