import React from "react";


function Card({textButton, title, img, index}) {
    return (
        <div className="card_body">
        <div className="occasion-card-item" key={index}>
        <div className="card-img">
            <img src={img}/>
        </div>
        <div className="card-desc">
           <div className="card-name">
            {title}
           </div>
           <div className="see-more">
            <a href="#">
                {textButton}
            </a>
           </div>
        </div>
     </div>
    </div>
    )
}

export default Card;