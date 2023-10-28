import React, { useState } from 'react';

function BMICalcDemo() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    const heightSquared = (height / 100) * (height / 100);
    const calculatedBMI = weight / heightSquared;
    setBMI(Math.round(calculatedBMI * 100) / 100);

    if (calculatedBMI < 16) {
      window.alert("Hi, " + name + "! You are completely underweight (Severe Thinner).");
    } else if (calculatedBMI >= 16 && calculatedBMI < 17) {
      window.alert("Hi, " + name + "! You are moderately underweight (Moderate Thinner).");
    } else if (calculatedBMI >= 17 && calculatedBMI < 18.5) {
      window.alert("Hi, " + name + "! You are a little underweight (Mild Thinness).");
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.99) {
      window.alert("Hi, " + name + "! You are in a healthy weight range.");
    } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
      window.alert("Hi, " + name + "! You are overweight.");
    } else if (calculatedBMI >= 30) {
      window.alert("Hi, " + name + "! You are obese.");
    } else {
      window.alert("Hi, " + name + "! Your BMI is outside the defined ranges.");
    }
  };

  const submitMe = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={submitMe}>
        <label>Please enter your name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br /><br />
        <label>Enter your height in cm:</label>
        <input type="text" name="height" value={height} onChange={handleHeight} />
        <br /><br />
        <label>Enter your weight in kg:</label>
        <input type="text" name="weight" value={weight} onChange={handleWeight} />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
      <p>Your BMI is: {bmi}</p>
    </div>
  );
}

export default BMICalcDemo;
