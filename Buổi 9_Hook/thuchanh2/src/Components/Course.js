import {useState, useEffect } from 'react';

function Course() {
    const [selectedCourse,setSelectedCourse] = useState("");
    
    useEffect(()=>{
        console.log("Selected: " + selectedCourse);
    },[selectedCourse]);

    return (
        <div>
            Khoá học :
            <select onChange={(e) => { setSelectedCourse(e.target.value) }}>
                <option value="Java">Java</option>
                <option value="Angular">Angular</option>
                <option value="Javascript">Javascript</option>
                <option value="Php">Php</option>
            </select>
        </div>
    )
}

export default Course;