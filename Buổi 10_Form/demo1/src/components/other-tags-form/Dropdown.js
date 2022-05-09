import { useState } from "react"

const Dropdown = () => {
    const [car,setCar] = useState('');
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <form>
            <select onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo" selected>Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

export default Dropdown;