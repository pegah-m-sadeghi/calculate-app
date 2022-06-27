import PaymentPlan from "./index";

describe("PaymentPlan", () => {
  beforeEach(() => {
    <PaymentPlan />;
  });
  test("render PaymentPlan component", () => {
    expect(<PaymentPlan />).toContainHTML;
  });
});
