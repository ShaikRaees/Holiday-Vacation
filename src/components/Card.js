import { useState } from "react";



function Card ({id,image,info,city,price,removeTour}) {
    const[readmore,setReadmore] = useState(false);
    const description = readmore ?info:`${info.substring(0,200)}....`
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour_details">
            <div className="tour_name">
            <h4 className="price">₹ {price}</h4>
            <h4 classname="city">{city}</h4>
        </div>
        <div className="description">
            {description}
            <span onClick={readmoreHandler} className="readmore">
                {readmore ? `....Show Less` : `Read More`}
            </span>
                
            </div>
            <button className="not_interested"onClick={() => removeTour(id)}>Not Interested</button>
        </div>
        </div>

    )
};


export default Card;