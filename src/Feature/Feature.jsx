import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
const Feature = () => {
    return (
        <div className='my-10'>
            <Slide cascade={true} delay={1000}>
                <p>I will animate only the first time you see me</p>
            </Slide>
            <Fade delay={2000}>
                <p>I will gently appear as I enter the viewport</p>
            </Fade>
            <Fade direction='up' delay={3000}>
                <p>I enter first...</p>
            </Fade>
           
        </div>
    );
};

export default Feature;