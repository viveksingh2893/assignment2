import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
const Form = lazy(() => import("./form"));
const Person = lazy(() => import("./person"));

const Screens = () => {
  const [select, setSelect] = useState();
  return (
    <div
      style={{
        height: "100%",
        maxWidth: "100vw",
        backgroundColor: "white",
      }}
    >
      <Suspense fallback={<h1 style={{position:"absolute",top:40, left:40}}>...loading</h1>}>
        <Routes>
          <Route path="/" element={<Form select={select} setSelect={setSelect}/>} />
          <Route path="/list" element={<Person setSelect={setSelect}/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Screens;
