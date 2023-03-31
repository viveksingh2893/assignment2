import React, { useState, useEffect, lazy, Suspense } from "react";
import "../assets/css/person.css";
import axios from "axios";
import ipaddress from "../components/url";
// import Card from "../components/card";
const Card = lazy(() => import("../components/card"));

const BreadCrumb = lazy(() => import("../components/breadcrumb"));

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
        <Suspense fallback={<h6> </h6>}>
          <BreadCrumb />
        </Suspense>
      </div>
      <div className="person-container">
        {data?.map((value, i) => {
          return (
            <div className="person-card" key={i}>
              <Suspense fallback={<h6> </h6>}>
                <Card value={value} id={i} setSelect={props.setSelect} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Person;
