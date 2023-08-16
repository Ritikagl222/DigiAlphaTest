import React, { useState } from "react";
import "./commonStyle.style.css";
const Class = ({ answeredData, index, setAnseredData }) => {
  const [answers, setAnswers] = useState({});
  const [studentArr, setStudentArr] = useState([1]);
  const genderOptions = ["Male", "Female", "Other"];

  const checkAgeDisabled = () => {
    return !!answeredData?.find((answer) => answer?.id === index);
  };

  const onAddData = () => {
    const data = answeredData?.find((e) => e.id === index);
    if (data) {
      setAnseredData(
        answeredData?.map((elem) => {
          if (elem?.id === index) {
            elem = answers;
          }
          return elem
        })
      );

    } else {
      setAnseredData([...answeredData, { ...answers, id: index }]);
    }
    localStorage.setItem("Data", JSON.stringify(answeredData));
  };
  const onFirstNameChange = (e, val) => {
    setAnswers({
      ...answers,
      [val]: { ...answers?.[val], firstName: e.target.value },
    });
  };
  const onLastNameChange = (e, val) => {
    setAnswers({
      ...answers,
      [val]: { ...answers?.[val], lastName: e.target.value },
    });
  };
  const onGenderChange = (e, val) => {
    setAnswers({
      ...answers,
      [val]: { ...answers?.[val], gender: e.target.value },
    });
  };
  const onAddAge = () => {
    setStudentArr([...studentArr, 1]);
  };

  return (
    <div className="classDiv">
      <h3>Class {index + 1}</h3>
      {studentArr?.map((val, index) => (
        <div className="inputDiv">
          <input
            className="inputs"
            onChange={(e) => onFirstNameChange(e, index)}
            placeholder="First Name"
          />
          <input
            className="inputs"
            onChange={(e) => onLastNameChange(e, index)}
            placeholder="Last Name"
          />
          <select className="inputs" onChange={(e) => onGenderChange(e, index)}>
            {genderOptions?.map((elem, index) => (
              <option value={elem} key={index}>
                {elem}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <button className="button" onClick={onAddData}>
          Add Data
        </button>
        <button
          disabled={!checkAgeDisabled()}

          className="age"
          onClick={onAddAge}
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default Class;
