import React, { memo} from "react";
import "../assets/css/card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate =  useNavigate(); 
  return (
    <div className="card">
      <LazyLoadImage
        src={props.value.avatar}
        style={{
          height: "12.44vw",
          width: "12.44vw",
          borderRadius: "6.22vw",
          resize: "contain",
        }}
      />
      <div className="card-details">
      <p
        className="card-text"
        style={{ fontWeight: 700, fontSize: "1.2vw", cursor: "pointer" }}
        onClick={() => {props.setSelect(props.id+1);navigate("../")}}
      >
        Name : {props.value.name}
      </p>
      <p className="card-text">Email: {props.value.email}</p>
      <p className="card-text">DOB: {props.value.dob}</p>
      <p className="card-text">Country: {props.value.country}</p>
      </div>
    </div>
  );
};

export default memo(Card);
