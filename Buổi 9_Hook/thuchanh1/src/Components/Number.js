import { useState } from 'react';

Number = () => {
    let [count,setCount] = useState(0);
    const handleUp =() => {
        const upValue = count + 1;
        setCount(upValue);
    }
    const handleDown = () => {
        const downValue = count -1;
        setCount(downValue);
    }
    return (
        <div>
            <button onClick={handleDown}>Giảm value</button>
            Giá trị hiện tại: {count}.
            <button onClick={handleUp}>Tăng value</button>
        </div>
    )
}

export default Number;