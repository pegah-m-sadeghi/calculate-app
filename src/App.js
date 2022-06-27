import "./App.css";
import { React } from "react";
import Header from "./components/Header";
import MortgageForm from "./components/MortgageForm";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";
import PaymentPlan from "./components/Payment/PaymentPlan";
import Equations from "./components/Payment/Equations/Equations";

function App() {
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
