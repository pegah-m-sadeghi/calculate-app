import "./App.css";
import "./components/Header";
import Button from "./Button";
import { React, useState } from "react";
import { default as Header } from "./components/Header";
import { default as MortgageForm } from "./components/MortgageForm";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";
import PaymentPlan from "./components/Payment/PaymentPlan";

function App() {
  // const [count, setCount] = useState(0);

  // const incrementCount = (increment) => {
  //   setCount(count + increment);
  // };

  // return (
  //   <div>
  //     <Button increment={1} onClickFunction={incrementCount} />
  //     <Button increment={10} onClickFunction={incrementCount} />
  //     <Button increment={100} onClickFunction={incrementCount} />
  //     <Button increment={1000} onClickFunction={incrementCount} />
  //     <span>{count}</span>
  //   </div>
  // );
  return (
    <div className="App">
      <Header />
      <MortgageForm />
      <PaymentPlan />
      <Descriptions />
      <Footer />
    </div>
  );
}

export default App;
