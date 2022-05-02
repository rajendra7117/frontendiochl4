import React, { useState, useEffect } from "react";
import "./Main.css";
import image1 from "../../images/image-product-1.jpg";
import image2 from "../../images/image-product-2.jpg";
import image3 from "../../images/image-product-3.jpg";
import image4 from "../../images/image-product-4.jpg";
import prev from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";

import ImgCard from "./ImgCard";
import CartButton from "./CartButton";
let imgs = [
  { img: image1, id: 0 },
  { img: image2, id: 1 },
  { img: image3, id: 2 },
  { img: image4, id: 3 },
];
const Main = () => {
  const [selected, setSelected] = useState(0);

  const selectImg = (id) => {
    setSelected(id);
  };

  const prevImage = (e) => {
    if(selected===0){
      setSelected(3)
    }
    else{
      setSelected(prev => prev-1)
    }
  }

  const nextImage = (e) => {
    if(selected===3){
      setSelected(0)
    }
    else{
      setSelected(prev => prev+1)
    }
  }
  return (
    <div className="main">
      <div className="container">
        <div className="img-sec">
        <div className="arrows">
              <img src={prev} onClick={prevImage}/>
              <img src={next} onClick={nextImage}/>
            </div>
          <div className="main-img">
            <img src={imgs[selected].img} alt="ProductImg" />
          </div>
          <div className="images">
          
            {imgs.map((item) => (
              <ImgCard
              key={item.id}
                img={item.img}
                id={item.id}
                selected={selected}
                selectImg={selectImg}
              />
            ))}
          </div>
        </div>
        <div className="info-sec">
          <h4>SNEAKES COMPANY</h4>
          <h2>
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather c
          </p>
          <div className="price"><span style={{display: 'flex', flexDirection: 'row'}}><h3>$125.00</h3> <span>50%</span></span>  <span className="original">$250.00</span></div>
         
          <div className="buttons">
            <CartButton />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
