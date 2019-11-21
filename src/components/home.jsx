import React from "react";

const Home = () => {
  return (
    <div className="container-fluid">
     <div>
        <div id="myCarousel" className="carousel slide   " data-ride="carousel">             
            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>           
            <div className="carousel-inner ">
                <div className="carousel-item active">
                <img src={process.env.PUBLIC_URL + "/pic1.jpeg"} alt="film" />
                </div>
                <div className="carousel-item">
                <img src={process.env.PUBLIC_URL + "/pic2.jpg"} alt="film" />
                </div>
                <div className="carousel-item">
                <img src={process.env.PUBLIC_URL + "/pic3.jpg"} alt="film" />
                </div>
            </div>           
            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
            </div>
        </div>
    </div>
  );
};

export default Home;
