import React from 'react';
import './skills.css';
import SoftwareDevelopment from '../../assets/development.jpg';
import Repair from '../../assets/repair.jpg';
import SystemSupport from '../../assets/system.jpg';
const Skills =() => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>As a systems engineer with one year of experience, I specialize in designing, implementing, and maintaining robust technological solutions. Leveraging my expertise in both hardware and software, I ensure seamless operations and enhanced performance across complex systems. My work involves analyzing requirements, troubleshooting issues, and driving efficiency to deliver reliable solutions that meet business objectives</span>
            <div className='skillBars'>
                <div className='skillBar'></div>
                <img src={SoftwareDevelopment} alt='SoftwareDevelopment' className='skillBarImg'/>
                <div className='SkillBarText'>
                    <h2>Systems Development</h2>
                    <p>System development is the creation and enhancement of efficient technological solutions through design, coding, testing, and deployment. It ensures effective problem-solving, collaboration, and innovation to meet user needs and business objectives.</p>
                </div>
            </div>

            <div className='skillBars'>
                <div className='skillBar'></div>
                <img src={Repair} alt='Repair' className='skillBarImg'/>
                <div className='SkillBarText'>
                    <h2>Laptop Repair</h2>
                    <p>Laptop repair involves diagnosing and fixing hardware and software issues to restore laptops to proper functioning. This includes identifying problems, performing necessary repairs, and ensuring optimal performance. Technicians address hardware malfunctions, software glitches, and connectivity problems to provide users with reliable and efficient laptops.</p>
                </div>
            </div>
            <div className='skillBars'>
                <div className='skillBar'></div>
                <img src={SystemSupport} alt='SystemSupport' className='skillBarImg'/>
                <div className='SkillBarText'>
                    <h2>System Support</h2>
                    <p>System support involves maintaining, troubleshooting, and assisting with computer systems and software to ensure smooth operation. This includes monitoring performance, resolving issues, and offering technical assistance to users, contributing to efficient operations and user satisfaction</p>
                </div>
            </div>
            
        </section>
    )
}

export default Skills;