import React, { useState } from "react";
import Class from "./Class";
import  './commonStyle.style.css'

const Home = () => {
  const [classArr, setClassArr] = useState([]);
  const [answeredData, setAnseredData] = useState([]);
  const onAddClick = () => {
    setClassArr([...classArr, 1]);
  };
  console.log(answeredData)
  return (
    <div className='main'>
        <div className='container'>
      <div className='buttonDiv'>
        <button className="button" onClick={onAddClick}>Add Class</button>
      </div>
      <div style={{width:'100%'}}>
        {classArr.length>0?classArr?.map((elem, index) => (
          <Class key={index} index={index}answeredData={answeredData} setAnseredData={setAnseredData}/>
        )):
        <div className="noClass">
            <h3>PLEASE ADD CLASSES BY CLICKING ADD BUTTON
            </h3> </div>}
      </div>
      </div>
    </div>
  );
};

export default Home;
