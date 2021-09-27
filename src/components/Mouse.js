import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {
        const handleCursor = (e) => {
            document.querySelector('.cursor').style.top = e.pageY + 
            "px";
            document.querySelector('.cursor').style.left = e.pageX + 
            "px";
        };
        window.addEventListener('mousemove', handleCursor);

        document.querySelectorAll('.hover').forEach((link) => {
            //link.addEventListener('mouseover', handleHover);
            //link.addEventListener('mouseleave', handleLeave);
        })
    }, []);

    return <span className="cursor"></span>     
};

export default Mouse;