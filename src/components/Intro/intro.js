import React from 'react';
import './intro.css';
// import { useHistory } from 'react-router-dom';
import bg from '../../assets/pride.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro =() => {
    // const history = useHistory();

    // const redirectToContactPage = () => {
    //     history.push('/contact');
    // };

    return (
        <section id="intro">
           <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='IntroText'>I am <span className='IntroName'>Pride Lesaigor,</span><br />System Engineer</span>
            <p className='introPara'>I'm a skilled systems engineer specializing in designing and <br/> optimizing complex tech solutions.<br /> With expertise in both hardware and software, I deliver efficient <br />and reliable results.<br />  Explore my portfolio to see how I create resilient systems that <br /> drive excellence.</p>
            <Link><button className='btn'><img src={btnImg} alt=''/>Hire Me</button></Link>
            </div> 
            <img src={bg} alt="" className='bg' />
        </section>
    )

}

export default Intro;