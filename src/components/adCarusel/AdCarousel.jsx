import Carousel from 'react-bootstrap/Carousel';
import Category from "./Category.jsx";
const AdCarousel = () => {

    return(
        <div className='mb-5  ' >
            <Carousel  data-bs-theme="dark" className="mb-5">
                <Carousel.Item>
                    <img style={{display:'flex', height:'500px', width:'100%',objectFit:'cover' }} src="src/assets/img1.jpg" alt="d"/>

                    <Carousel.Caption className="bg-white bg-opacity-50 shadow-lg">
                        <h3>The iPhone 14 Pro Max</h3>
                        <h6>The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{display:'flex', height:'500px', width:'100%',objectFit:'cover' }} src="src/assets/img2.jpg" alt="d"/>

                    <Carousel.Caption className="bg-white bg-opacity-50 shadow-lg">
                        <h3>Samsung Galaxy S23 Ultra</h3>
                        <h6>The Samsung Galaxy S23 Ultra is the headliner of the S23 series.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{display:'flex', height:'500px', width:'100%', objectFit:'cover'}} src="src/assets/img3.jpg" alt="d"/>

                    <Carousel.Caption className="bg-white bg-opacity-50 shadow-lg">
                        <h3>iMac</h3>
                        <h6>iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

           <Category/>
        </div>
    )
}



export default AdCarousel;