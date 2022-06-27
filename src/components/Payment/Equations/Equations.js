import React, { Component } from "react";
class Equations extends React.Component {
  constructor(props) {
    super(props);
  }
  calcNumberOfPayments(
    amortizationPeriodYear_i,
    amortizationPeriodMonth_i,
    prePaymentAmount_i,
    paymentFreq_i
  ) {
    let numberOfPayments = 0;
    let term = 0;
    numberOfPayments = (
      parseInt(amortizationPeriodYear_i) * 12 +
      parseInt(amortizationPeriodMonth_i) +
      parseInt(prePaymentAmount_i) * parseInt(paymentFreq_i)
    ).toFixed(1);
    term = (parseInt(prePaymentAmount_i) * parseInt(paymentFreq_i)).toFixed(1);
    return [numberOfPayments, term];
  }
  calcMortgagePayment(
    interestRate_i,
    amortizationPeriodYear_i,
    amortizationPeriodMonth_i,
    mortgageAmount_i,
    startWith_i
  ) {
    let mortgatePayment = 0;
    let term = 0;
    mortgatePayment = (
      parseInt(amortizationPeriodYear_i) * 12 +
      parseInt(amortizationPeriodMonth_i) +
      (parseInt(mortgageAmount_i) * parseInt(interestRate_i)) / 12 +
      parseInt(startWith_i)
    ).toFixed(1);
    term = (
      (parseInt(mortgageAmount_i) * parseInt(interestRate_i)) / 12 +
      parseInt(startWith_i)
    ).toFixed(1);
    return [mortgatePayment, term];
  }
  calcPrepayment(
    interestRate_i,
    prePaymentAmount_i,
    prePaymentFreq_i,
    mortgageAmount_i,
    startWith_i
  ) {
    let prePayment = 0;
    let term = 0;
    prePayment = (
      parseInt(prePaymentAmount_i) * parseInt(prePaymentFreq_i) +
      (parseInt(mortgageAmount_i) * parseInt(interestRate_i)) / 12 +
      parseInt(startWith_i)
    ).toFixed(1);
    term = (
      (parseInt(mortgageAmount_i) * parseInt(interestRate_i)) / 12 +
      parseInt(startWith_i)
    ).toFixed(1);
    return [prePayment, term];
  }
  calcPrincipalPayments(
    interestRate_i,
    prePaymentFreq_i,
    paymentFreq_i,
    term_i,
    mortgageAmount_i
  ) {
    let principalPayments = 0;
    let term = 0;
    principalPayments = (
      parseInt(prePaymentFreq_i) +
      parseInt(paymentFreq_i) +
      parseInt(term_i) +
      (parseInt(mortgageAmount_i) * parseInt(interestRate_i)) / 12
    ).toFixed(1);
    term = (
      (parseInt(mortgageAmount_i) * parseInt(interestRate_i)) /
      12
    ).toFixed(1);
    return [principalPayments, term];
  }
  calcInterestPayments(
    interestRate_i,
    prePaymentFreq_i,
    paymentFreq_i,
    term_i
  ) {
    let interestPayments = 0;
    let interestTerm = 0;
    interestPayments = (
      (parseInt(prePaymentFreq_i) * parseInt(interestRate_i)) / 12 +
      (parseInt(paymentFreq_i) * parseInt(interestRate_i)) / 12 +
      parseInt(term_i) * 12
    ).toFixed(1);
    interestTerm = (
      (parseInt(paymentFreq_i) * parseInt(interestRate_i)) /
      12
    ).toFixed(1);
    return [interestPayments, interestTerm];
  }
  render() {
    return <></>;
  }
}
export default Equations;
