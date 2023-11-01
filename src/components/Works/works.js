import React from "react";
import './works.css';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.jpg';
import portfolio6 from '../../assets/portfolio6.jpg';

const Works =() =>{
    return (
        <section id='works'>
           <h2 className="worksTitle"> My Portfolio</h2>
           <span className="worksDesc">This is all about my deployed projects.</span>
           <div className="worksImgs">
            <img src={portfolio1} alt="" className="worksImg"/>
            <img src={portfolio2} alt="" className="worksImg"/>
            <img src={portfolio3} alt="" className="worksImg"/> 
            <img src={portfolio4} alt="" className="worksImg"/>
            <img src={portfolio5} alt="" className="worksImg"/> 
            <img src={portfolio6} alt="" className="worksImg"/>   

           </div>
           <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;