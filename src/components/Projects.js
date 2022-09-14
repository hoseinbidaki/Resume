import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';

import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg7 from "../assets/img/project-img-7.png";

import compImg1 from "../assets/img/compImg1.png";

import ubcomp3 from "../assets/img/ubcomp3.jpg";

import accept5 from "../assets/img/accept5.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";

// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { WorkSlides } from "./WorkSlides";

export const Projects = () => {

    const projects = [
        {
            title: "final bachelor project(2022)",
            description: "in collaboration with parisa.mqdm@gmail.com",
            imgUrl: projImg1,
            link: "https://github.com/hoseinbidaki/Machine-learning-project"
        },
        {
            title: "School Management System(2021)",
            description: "Software Engineering Laboratory Course Project.",
            imgUrl: projImg2,
            link: "https://github.com/hoseinbidaki/SchoolMangementSystem",
        },
        {
            title: "Accounting Management System(2022)",
            description: "Personal accounting system for managing expenses with the possibility of reporting and management",
            imgUrl: projImg3,
            link: "https://github.com/hoseinbidaki/AccountingProject",
        },
        {
            title: "Implement the game 8 puzzles(2019)",
            description: "8 puzzle game that solves puzzles in different modes with A* and DFS algorithms Data structure course project",
            imgUrl: projImg4,
            link: "https://github.com/hoseinbidaki/8Puzzle-Game",
        },
        {
            title: "Socket Programing(2020)",
            description: "Implement a chat project between two computer networking systems course projects",
            imgUrl: projImg5,
            link: "https://github.com/hoseinbidaki/Socket-Programing-Project",
        },
        {
            title: "CupheadGame",
            description: "Implement cupheadGame with java FX(2022)",
            imgUrl: projImg6,
            link: "https://github.com/hoseinbidaki/cupheadGame",
        },
        {
            title: "Civilization",
            description: "Implement civilization Game with java(2022)",
            imgUrl: projImg7,
            link: "https://github.com/hoseinbidaki/civilization",
        },
    ];

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
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Experiences</h2>
                                    <br></br>
                                    {/* <p>
                                        In this section showed my experiences in the form of projects that I have done, work experiences that I have had, and also the experiences of participating in programming competitions that I have had.
                                    </p> */}
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Work</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Competition</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="first">
                                                <br></br>
                                                <WorkSlides />
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <div className="skill-bx wow zoomIn">
                                                    <list className="projDest">
                                                        <h5>Holding a C++ Algorithmic Programing Course (2019)</h5>
                                                        <span>
                                                            I held a Java Object Oriented Programming course for
                                                            undergraduate students. over 20 students attended this
                                                            course. In this course, some important concepts such as
                                                            Classes/Objects, Encapsulation, Inheritance, Polymorphism,
                                                            Abstract classes/methods, Interfaces, etc were taught by me.
                                                            <br></br><br></br>
                                                        </span>
                                                        <h5>Holding a C++ Algorithmic Programing Course (2019)</h5>
                                                        <span>
                                                            I held a C++ algorithmic course for undergraduate students.
                                                            over 25 students attended this course. In this course, some
                                                            useful concepts such as vectors, maps, multimaps, sets,
                                                            multisets, stacks, queues, priority queues, etc were taught
                                                            by me.
                                                            <br></br><br></br>
                                                        </span>
                                                        <h5>Ravens (2018 - 2022)</h5>
                                                        <span>
                                                            Member of ICPC club<br></br>
                                                            A club for Bojnourd University students who like to
                                                            develop their skills in algorithms and team working for
                                                            ACM competitions.
                                                            <br></br><br></br>
                                                        </span>
                                                        <h5> Performing freelance Projects (2019 – now)</h5>
                                                        <span>
                                                            I have done freelancing projects offered to me in Python, C ++ and Java.
                                                        </span>
                                                    </list>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <br></br>
                                                <div className="skill-bx wow zoomIn">
                                                    <div className="competition">
                                                        <div className="compp">
                                                            <img src={compImg1}></img>
                                                            <h5>The 2020 ICPC Asia Tehran Regional Contest</h5>
                                                            <span>Ranked 19th as "Ravens jTime"</span>
                                                            <br></br><br></br>
                                                        </div>
                                                        <div className="compp">
                                                            {/* <img src={ubcomp1}></img> */}
                                                            {/* <img src={ubcomp4}></img> */}
                                                            {/* <img src={ubcomp2}></img> */}
                                                            <img src={ubcomp3}></img>
                                                            <h5>ubcomp4 University of Bojnourd Contest</h5>
                                                            <span>Ranked 5th as "Ravens The Great"</span>
                                                            <br></br><br></br>
                                                        </div>
                                                        <div className="compp">
                                                            <img src={accept5}></img>
                                                            <h5>Accept5 Sajad University Contest</h5>
                                                            <span>Ranked 12th as "Ravens 5"</span>
                                                            <br></br><br></br>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
}
