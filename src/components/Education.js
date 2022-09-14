import { Col, Container, Row } from "react-bootstrap"
import TrackVisibility from "react-on-screen"

import colorSharp2 from "../assets/img/color-sharp2.png";

import uniBojLogo from "../assets/img/University_of_Bojnord_logo.png";
import highShoolLogo from "../assets/img/highSchool.png";
import ds from "../assets/img/ds.png";
import ap from "../assets/img/ap.png";

export const Education = () => {
    return (
        <section className="project" id="education">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="skill-bx wow zoomIn">
                                        <div className="edu">
                                            <h2>Education</h2>
                                            <br></br>
                                            <tr>
                                                <div className="degree">
                                                    <h5><img src={uniBojLogo} /> Bachelor Degree OF Computer Engineering (2018-2022) </h5>
                                                    {/* <p>3th rank, Gpa: 4</p> */}
                                                </div>
                                                <div className="degree">
                                                    <h5><img src={highShoolLogo} /> High School diploma in Mathematics and Physics (2014-2018) </h5>
                                                    {/* <p>First rank, Gpa: 4</p> */}
                                                </div>
                                            </tr>
                                        </div>
                                        <div className="edu">
                                            <h3>TEACHING ASSISTANTSHIPS</h3>
                                            <br></br>
                                            <tr>
                                                <div className="degree">
                                                    <h5><img src={ds} /> Data Structure (2019) </h5>
                                                    {/* <p>3th rank, Gpa: 4</p> */}
                                                </div>
                                                <div className="degree">
                                                    <h5><img src={ap} /> Advanced Programming (2019) </h5>
                                                    {/* <p>First rank, Gpa: 4</p> */}
                                                </div>
                                            </tr>
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
}