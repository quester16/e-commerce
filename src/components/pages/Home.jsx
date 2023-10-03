import AdCarousel from "../adCarusel/AdCarousel.jsx";
import ProductList from "../product-list/ProductList.jsx";
import withRender from "../hoc/withRender.jsx";

const ProductsLimited = withRender(ProductList, true)
const Home = () => {
    return(
        <>
            <div className="banner">
                <AdCarousel/>
            </div>
            <main>
                <ProductsLimited/>
            </main>
        </>
    )
}

export default Home;