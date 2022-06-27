import Equations from "./Equations";
describe("Equations class", () => {
  test("calculates Number of Payments", () => {
    const equations = new Equations();
    expect(equations.calcNumberOfPayments(1, 1, 1, 1)).toEqual(["14.0", "1.0"]);
  });
  test("calculates Mortgage Payments", () => {
    const equations = new Equations();
    expect(equations.calcMortgagePayment(1, 1, 1, 1, 1)).toEqual([
      "14.1",
      "1.1",
    ]);
  });
  test("calculates Prepayments", () => {
    const equations = new Equations();
    expect(equations.calcPrepayment(1, 1, 1, 1, 1)).toEqual(["2.1", "1.1"]);
  });
  test("calculates Principal Payments", () => {
    const equations = new Equations();
    expect(equations.calcPrincipalPayments(1, 1, 1, 1, 1)).toEqual([
      "3.1",
      "0.1",
    ]);
  });
  test("calculates Interests of Payments", () => {
    const equations = new Equations();
    expect(equations.calcInterestPayments(1, 1, 1, 1)).toEqual(["12.2", "0.1"]);
  });
});
