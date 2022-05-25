import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";

function App(){
  return(
    <BrowserRouter>
      <Route path='/' element={<Category/>}></Route>
      {/* <Route path='/product' element={<Product/>}></Route> */}
    </BrowserRouter>
  )
}

export default App;