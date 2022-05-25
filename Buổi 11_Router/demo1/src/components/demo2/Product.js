import { useLocation, useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const { categoryID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    return (
        <div>
            {/* <p>Category ID = {categoryID}</p> */}
            <p>categoryID = {location.state.categoryID}</p>
            <button onClick={(e) => {navigate('/')}}>Home</button>
        </div>
    )
}
export default Product;