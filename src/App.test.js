import MortgageForm from "./components/MortgageForm";
import Descriptions from "./components/Descriptions";
import Footer from "./components/Footer";
import PaymentPlan from "./components/Payment/PaymentPlan";
import App from "./App";
describe("PaymentPlan", () => {
  beforeEach(() => {
    <App />;
    <MortgageForm />;
    <PaymentPlan />;
    <Descriptions />;
    <Footer />;
  });

  test("render PaymentPlan component", () => {
    expect(<App />).toContainHTML;
  });
  test("render PaymentPlan component", () => {
    expect(<MortgageForm />).toContainHTML;
  });
  test("render PaymentPlan component", () => {
    expect(<PaymentPlan />).toContainHTML;
  });
  test("render PaymentPlan component", () => {
    expect(<Descriptions />).toContainHTML;
  });
  test("render PaymentPlan component", () => {
    expect(<Footer />).toContainHTML;
  });
});
