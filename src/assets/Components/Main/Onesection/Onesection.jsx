import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Onesection/onesection.css'

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src='https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg' text="First slide" />
                <Carousel.Caption className='first-slide'>
                    <span>Fashion Sale</span>
                    <h1>Minimal Menz Style</h1>
                    <p className='title'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                    <button className='btn'>Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg' text="Second slide" />
                <Carousel.Caption className='second-slide'>
                <span>Fashion Sale</span>
                    <h1>Minimal Menz Style</h1>
                    <p className='title'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                    <button className='btn'>Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;