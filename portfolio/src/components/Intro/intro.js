import React from "react";
import './intro.css';
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ramya</span><br />Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br/> visually appealing and user-friendly websites</p>
                <Link><button className="btn"><img src={btnImg} alt="HireMe" className="btnImg" height={100} width={100}/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" height={150} width={150}/>
        </section>
    )
}

export default Intro;