import React from 'react'
import Navbar from './Navbar'
import './index.css'

function Art() {
    return (
        <div style={{backgroundColor: "#000000"}}>
            <Navbar/>
            <div className="gallery">
                <div className="row">
                    <img className="artimages" alt="" src={require('./gallery/Assassin  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Bennett  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Blim  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Chongyun  Job 2.jpg')} />
                </div>
                <div className="row">
                    <img className="artimages" alt="" src={require('./gallery/Cloud  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Diluc  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Kaneki  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Marth  Job 2.jpg')} />
                </div>
                <div className="row">
                    
                    <img className="artimages" alt="" src={require('./gallery/Vampire Lord  Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Saber Job 2.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Nymph   Job 6.jpg')} />
                    <img className="artimages" alt="" src={require('./gallery/Xiao  Job 2.jpg')} />
                </div>
                <div className="rowHorizontal">
                    <img className="artimageshoriz" alt="" src={require('./gallery/Razor 17 x 11 Job 4.jpg')} />
                    <img className="artimageshoriz" alt="" src={require('./gallery/VL  Job 5.jpg')} />
                </div>
                <div className="rowHorizontal">
                    <img className="artimageshoriz" alt="" src={require('./gallery/Music Job1.jpg')} />
                    <img className="artimageshoriz" alt="" src={require('./gallery/Sea Phantom  Job1.jpg')} />
                </div>
            </div>
        </div>
    )
}

export default Art