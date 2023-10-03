import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProductsPage from "../products-page/ProductsPage.jsx";
import Header from "../header/Header.jsx";
import withRender from "../hoc/withRender.jsx";

const ProductsAll = withRender(ProductsPage, false)
function App() {

  return (
    <div className='app'>
        <Router>
            <div className="header">
                <Header/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsAll/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default App
