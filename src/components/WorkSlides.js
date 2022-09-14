import courseImg1 from "../assets/img/course-1.jpg";
import courseImg2 from "../assets/img/course-2.jpg";
import courseImg3 from "../assets/img/course-3.jpg";
import courseImg4 from "../assets/img/course-4.jpg";
import courseImg5 from "../assets/img/course-5.jpg";
import Carousel from 'react-multi-carousel';

export const WorkSlides = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item2">
                                <img src={courseImg1} alt="Image" />
                                <h5>Holding a C++ Algorithmic Programing Course (2019)</h5>
                            </div>
                            <div className="item2">
                                <img src={courseImg2} alt="Image" />
                                <h5>Holding a Java OOP Course (2019)</h5>
                            </div>
                            <div className="item2">
                                <img src={courseImg3} alt="Image" />
                                <h5>Ravens (2018 - 2022)</h5>
                            </div>
                            <div className="item2">
                                <img src={courseImg4} alt="Image" />
                                <h5>Performing freelance Projects (2019 – now)</h5>
                            </div>
                            <div className="item2">
                                <img src={courseImg5} alt="Image" />
                                <h5>+3 Years’ experience in ACM ICPC Competition</h5>
                            </div>
                        </Carousel>
                        {/* <br></br> */}
                        {/* <h1>Photos</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}