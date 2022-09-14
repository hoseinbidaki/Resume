
import {userState, useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg";
import adminPhoto from "../assets/img/adminPhoto.png";
export const Banner = () => {
    // const [loopNum, setLoopNum] = useState(0);
    // const [isDeleting, setIsdeleting] = useState(false);
    // const toRotate = ["", "",""];
    // const [text, setText] = useState('');
    // const[delta, setDelta] = useState(300 - Math.random() * 100);
    // const period = 2000;

    // useEffect(()=> {
    //     let ticker = setInterval( () => {
    //         tick()
    //     },delta)
    //     return () => {clearInterval(ticker)}; 
    // }, [text])
    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    //     setText(updatedText);

    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta / 2);
    //     }

    //     if (!isDeleting && updatedText === fullText) {
    //         setIsdeleting(true);
    //         setDelta(period);
    //     }else if(isDeleting && updatedText === ''){
    //         setIsdeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setDelta(500);
    //     }
    // }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portofolio ^_*</span>
                        <h1><img className="adminPhotos" src={adminPhoto} alt="adminPhoto" width={50} height={50}></img>{" Hossein Bidaki "}<span className="wrap"></span></h1>
                        <p>
                            I was born on April, 16, 2000. I have been fond of
                            computers, technology and games and have started
                            programming since I was 15. I enjoy learning, coding
                            and gaining experiences.
                            I'm absolutely interested in Artificial Intelligence (AI),
                            Machine Learning (ML) and the fields of working with
                            data and analysis.
                        </p>
                        <a href="https://raw.githubusercontent.com/hoseinbidaki/ACM/93c5d0929ebf283e83043f70450acf3aa1a455a1/hosseinbidaki_CV.pdf"><button>Download<ArrowRightCircle size={25}/></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="rocket" src={headerImg} alt="Headder Img"/>
                        {/* <Galery className="rocket"></Galery> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
