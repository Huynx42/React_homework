import { useState } from "react"

const File = () => {
    
    const handleChange = (e) => {
        console.log(e.target.files[0]);
        console.log(e.target.value);
    }
    return (
        <form>
            <input type='file' onChange={handleChange}></input>
        </form>
    )
}

export default File;