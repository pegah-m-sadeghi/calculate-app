import "./App.css";
import "./components/Header";
import { default as Header } from "./components/Header";
import { default as MortgageForm } from "./components/MortgageForm";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";
import PaymentPlan from "./components/Payment/PaymentPlan";

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
