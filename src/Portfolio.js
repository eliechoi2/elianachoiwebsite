import React from 'react'
import Navbar from './Navbar'
import './index.css'
import scrollathon from './uidesigns/scrollathon.pdf'

function Portfolio() {
    return(
        <div style={{backgroundColor:'#000000'}}>
            <Navbar/>

            <div className="ui">
                {/* <hr></hr> */}
                <h1 className="uititle">UI/UX DESIGNS</h1>
                {/* <hr></hr> */}
                <div className="uigallery">
                    <div className="uigalleryrow">
                        <a href="https://www.figma.com/file/boLkXOVCx0KmIvhF4wnZQy/Untitled?node-id=0%3A1" target = "_blank" rel="noreferrer"> <img className="uiimg" alt="" src={require('./ui/Cindy.jpg')}/></a>
                        <a href="https://poppinsproductions.herokuapp.com/index.html" target = "_blank" rel="noreferrer"> <img className="uiimg"alt="" src={require('./ui/Poppins Productions.jpg')}/></a>
                        <img className="uiimg"alt="" src={require('./ui/dcc.jpg')}/>
                    </div>
                    <div className="uigalleryrow">
                        <a target = "_blank" rel="noreferrer" href={scrollathon}><img className="uiimg"alt="" src={require('./ui/scroll.jpg')}/></a>
                        <a href="https://www.figma.com/file/rfJrGGDlKWUkRWFvVJp8nb/Untitled?node-id=0%3A1" target = "_blank" rel="noreferrer"><img className="uiimg"alt="" src={require('./ui/Midas 3.jpg')}/></a>
                        <a href="https://www.figma.com/file/gk8lkSBlo9nCy5sncI92VA/Untitled?node-id=0%3A1" target = "_blank" rel="noreferrer"><img className="uiimg"alt="" src={require('./ui/vr.jpg')}/></a>
                
                    </div>
                    
                </div>
            </div>
            <div className="web">
                {/* <hr></hr> */}
                <h1 className="webtitle">WEBSITES</h1>
                {/* <hr></hr> */}
                <div className="webgallery">
                    <div className="webgalleryrow">
                        <a target = "_blank" rel="noreferrer" href="https://drchoi.herokuapp.com/"><img className="webimg" alt="" src={require('./web/ABC.jpg')}/></a>
                        <a target = "_blank" rel="noreferrer" href="https://chris-present.herokuapp.com/"><img className="webimg" alt="" src={require('./web/Chris Present.jpg')}/></a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Portfolio