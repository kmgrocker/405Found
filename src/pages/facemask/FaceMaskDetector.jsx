import React from 'react';
import "./facemask.css";

export default function FaceMaskDetector(){
    
    return(
        <div style={{'height':"100vh", 'width':'100%','margin':'4px 178px'}}>
            <video width="720" height="500" autoplay="autoplay">
                <source src={`${process.env.PUBLIC_URL}/mask-detector.mp4`} type="video/mp4"/>
            </video>
        </div>
        );
}