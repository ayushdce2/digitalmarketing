import facebook from "../static/icons/facebook.png";
import twitter from "../static/icons/twitter.png";
import instagram from "../static/icons/instagram.png";
import one from "../static/banner/one.png";
import two from "../static/banner/two.png";
import three from "../static/banner/three.png";

import "./Header.css";

const Header =()=>{
    return(
        <>
        <div className="header">
            <div className="header_inside container">
                    <div className="d-flex p-2 justify-content-between align-items-center">
                        <div>
                            <a className="navbar-brand fs-1" href="javascript:void(0)">WebSavvy</a>
                        </div>
                        <div>
                            <button className="btn" type="button" style={{backgroundColor:"#0089b3",color:"#fff"}}>Get an Appointment</button>
                        </div>
                        
                    </div>
           

               
                    <nav className="navbar navbar-expand-sm navbar-light custom_background-color">
                        <div className="container-fluid">
                           
                            <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                <a className="nav-link " href="javascript:void(0)">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " href="javascript:void(0)">About Us</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " href="javascript:void(0)">Our Achievements</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " href="javascript:void(0)">Why Choose us</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " href="javascript:void(0)">Our Services</a>
                                </li>
                            </ul>
                            
                                
                                <div className="d-flex social_icons">
                                    <img src={facebook} />
                                    <img src={instagram} />
                                    <img src={twitter} />
                                </div>
                            
                            </div>
                        </div>
                        </nav>

                    
            </div>
        </div>
        <div className="banner_wrap">
                        <div className="banner-wrap">

                                                   
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                        
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                </div>

                            
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src={one} alt="Los Angeles" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={two} alt="Chicago" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={three} alt="New York" className="d-block w-100" />
                                    </div>
                                </div>

                               
                                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                                </div>

                        </div>

                    </div>
            

     
        </>
    )
}

export default Header;