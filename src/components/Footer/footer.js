
import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update every 1000ms (1 second)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const year = currentDate.getFullYear();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric', second:'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    return (
        <footer className='footer'>
            {formattedDate} - &copy; {year} Lesaigor Pride. All rights reserved.
        </footer>
    );
}

export default Footer;
