import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import meter4 from "../assets/img/meter4.png";
import meter6 from "../assets/img/meter6.png";

import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";

import meter10 from "../assets/img/meter10.png";
import meter11 from "../assets/img/meter11.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                Programming Languages
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>C</h5>
                                </div>
                            </Carousel>
                        </div>
                        <div className="skill-bx wow zoomIn">
                            <p>
                                Software Development
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Agile Methodology</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Jupyter</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image" />
                                    <h5>google Collab</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="skill-bx wow zoomIn">
                        <p>
                            Desktop Applications framework and libraries
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>PyQt5</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Java FX</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>C# windows form</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>C++ Qt</h5>
                            </div>
                        </Carousel>
                    </div>
                    <div className="skill-bx wow zoomIn">
                        <p>
                            Databases
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5> SQL server</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Sql lite</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
