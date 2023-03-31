import axios from "axios";
import React, { useState, useEffect } from "react";
import ipaddress from "../components/url";
import Card from "../components/card";
import "../assets/css/person.css";
import BreadCrumb from "../components/breadcrumb";

const Person = (props) => {
  const [data, setData] = useState();

  const Data = async () => {
    await axios
      .get(`${ipaddress}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Data();
  }, []);

  console.log(data);

  return (
    <>
      <div className="breadcrumb">
        <BreadCrumb />
      </div>
      <div className="person-container">
        {data?.map((value, i) => {
          return (
            <div className="person-card" key={i}>
              <Card value={value} id={i} setSelect={props.setSelect} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Person;
