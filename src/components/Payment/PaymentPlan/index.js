import React from "react";
import Input from "../../Input";
import SelectBar from "../../SelectBar";
import { useState, useEffect } from "react";
import Equations from "../Equations/Equations";
const PaymentPlan = () => {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [amortizationPeriodYear, setAmortizationPeriodYear] = useState(1);
  const [amortizationPeriodMonth, setAmortizationPeriodMonth] = useState(1);
  const [paymentFreq, setPaymentFreq] = useState(50);
  const [term, setTerm] = useState(1);
  const [prePaymentAmount, setPrePaymentAmount] = useState(0);
  const [prePaymentFreq, setPrePaymentFreq] = useState(10);
  const [startWith, setStartWith] = useState(1);
  const [termNumberOfPayments, setTermNumberOfPayments] = useState(0);
  const [amortizationNumberOfPayments, setAmortizationNumberOfPayments] =
    useState(0);
  const [amortizationMortgagePayment, setAmortizationMortgagePayment] =
    useState(0);
  const [termMortgagePayment, setTermMortgagePayment] = useState(0);
  const [amortizationPrepayment, setAmortizationPrepayment] = useState(0);
  const [termPrepayment, setTermPrepayment] = useState(0);
  const [amortizationPrincipalPayments, setAmortizationPrincipalPayments] =
    useState(0);
  const [termPrincipalPayments, setTermPrincipalPayments] = useState(0);
  const [amortizationInterestPayments, setAmortizationInterestPayments] =
    useState(0);
  const [termInterestPayments, setTermInterestPayments] = useState(0);
  const [amortizationTotalCost, setAmortizationTotalCost] = useState(0);
  const [termTotalCost, setTermTotalCost] = useState(0);
  const yearOptions = [
    { value: "1 year", key: 1 },
    { value: "2 years", key: 2 },
    { value: "3 years", key: 3 },
    { value: "4 years", key: 4 },
    { value: "5 years", key: 5 },
    { value: "6 years", key: 6 },
    { value: "7 years", key: 7 },
    { value: "8 years", key: 8 },
    { value: "9 years", key: 9 },
    { value: "25 years", key: 25 },
  ];
  const monthOptions = [
    { value: "1 month", key: 1 },
    { value: "2 months", key: 2 },
    { value: "3 months", key: 3 },
    { value: "4 months", key: 4 },
    { value: "5 months", key: 5 },
    { value: "6 months", key: 6 },
    { value: "7 months", key: 7 },
    { value: "8 months", key: 8 },
    { value: "9 months", key: 9 },
    { value: "10 months", key: 10 },
  ];
  const frequencyOptions = [
    { value: "Accelerated Weekly", key: 50 },
    { value: "Weekly", key: 40 },
    { value: "Accelerated Bi-weekly", key: 30 },
    { value: "Bi-Weekly", key: 20 },
    { value: "Semi-monthly", key: 15 },
    { value: "Monthly", key: 10 },
  ];
  const termOptions = [
    { value: "1 year", key: 1 },
    { value: "2 years", key: 2 },
    { value: "3 years", key: 3 },
    { value: "4 years", key: 4 },
    { value: "5 years", key: 5 },
    { value: "6 years", key: 6 },
    { value: "7 years", key: 7 },
    { value: "8 years", key: 8 },
    { value: "9 years", key: 9 },
    { value: "10 years", key: 10 },
  ];
  const preFrequencyOptions = [
    { value: "One time", key: 10 },
    { value: "Each year", key: 15 },
    { value: "Same as regular payment", key: 5 },
  ];

  const equations = new Equations();
  let totalAmortizationCost = 0;
  let totalTermCost = 0;
  useEffect(() => {
    let [numberOfPayment, numberOfPayment_1] = equations.calcNumberOfPayments(
      amortizationPeriodYear,
      amortizationPeriodMonth,
      prePaymentAmount,
      paymentFreq
    );
    let [mortgagePayment, mortgagePayment_1] = equations.calcMortgagePayment(
      amortizationPeriodYear,
      amortizationPeriodMonth,
      mortgageAmount,
      interestRate,
      startWith
    );
    let [prePayment, prePayment_1] = equations.calcPrepayment(
      interestRate,
      prePaymentAmount,
      prePaymentFreq,
      mortgageAmount,
      startWith
    );
    let [principalPayments, principalPayments_1] =
      equations.calcPrincipalPayments(
        interestRate,
        prePaymentFreq,
        paymentFreq,
        term,
        mortgageAmount
      );
    let [interestPayments, interestPayments_1] = equations.calcInterestPayments(
      interestRate,
      prePaymentFreq,
      paymentFreq,
      term
    );
    totalAmortizationCost =
      parseInt(numberOfPayment) +
      parseInt(mortgagePayment) +
      parseInt(prePayment) +
      parseInt(principalPayments) +
      parseInt(interestPayments);
    totalTermCost =
      parseInt(numberOfPayment_1) +
      parseInt(mortgagePayment_1) +
      parseInt(prePayment_1) +
      parseInt(principalPayments_1) +
      parseInt(interestPayments_1);
    setAmortizationNumberOfPayments(numberOfPayment);
    setAmortizationMortgagePayment(mortgagePayment);
    setAmortizationPrepayment(prePayment);
    setAmortizationPrincipalPayments(principalPayments);
    setAmortizationInterestPayments(interestPayments);
    setAmortizationTotalCost(totalAmortizationCost);
    setTermNumberOfPayments(numberOfPayment_1);
    setTermMortgagePayment(mortgagePayment_1);
    setTermPrepayment(prePayment_1);
    setTermPrincipalPayments(principalPayments_1);
    setTermInterestPayments(interestPayments_1);
    setTermTotalCost(totalTermCost);
  }, [
    amortizationPeriodYear,
    amortizationPeriodMonth,
    paymentFreq,
    prePaymentFreq,
    prePaymentAmount,
    startWith,
    term,
    mortgageAmount,
    interestRate,
  ]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <form className="bg-white shadow-md rounded mt-10 mb-4 ml-10 w-11/12">
          <div className="grid grid-flow-row-dense grid-cols-1">
            <div className="bg-sky-600 h-8 px-3">
              <h3 className="font-medium leading-6 text-slate-50 text-lg float-left">
                Payment Plan
              </h3>
            </div>
            <Input
              inputType={"text"}
              title={"Mortgage Amount:"}
              name={"mortgageAmount"}
              value={mortgageAmount}
              placeholder={"100,000.00"}
              handleChange={(event) => setMortgageAmount(event.target.value)}
            />
            <Input
              inputType={"text"}
              title={"Interest Rate:"}
              name={"interestRate"}
              placeholder={"5.00"}
              value={interestRate}
              handleChange={(event) => setInterestRate(event.target.value)}
            />
            <SelectBar
              title={"Amortization Period:"}
              name={"amortizationPeriodYear"}
              options={yearOptions}
              value={
                amortizationPeriodYear ? amortizationPeriodYear : yearOptions[0]
              }
              handleChange={(event) =>
                setAmortizationPeriodYear(event.target.value)
              }
            />
            <SelectBar
              name={"amortizationPeriodMonth"}
              options={monthOptions}
              value={amortizationPeriodMonth}
              placeholder={""}
              handleChange={(event) =>
                setAmortizationPeriodMonth(event.target.value)
              }
            />
            <SelectBar
              title={"Payment Frequency:"}
              name={"paymentFreq"}
              options={frequencyOptions}
              value={paymentFreq}
              handleChange={(event) => {
                setPaymentFreq(event.target.value);
              }}
            />
            <SelectBar
              title={"Term:"}
              name={"term"}
              options={termOptions}
              value={term}
              handleChange={(event) => setTerm(event.target.value)}
            />
          </div>
        </form>
        <div className="w-full  max-w-xl flex-col">
          <form className="bg-white shadow-xl rounded mt-10 mb-4 mr-14 w-full">
            <div className="grid grid-flow-row-dense">
              <div className="bg-sky-600 h-8 px-3">
                <h3 className="font-medium leading-6 text-slate-50 text-lg float-left">
                  Prepayment Plan
                </h3>
              </div>
              <Input
                inputType={"text"}
                title={"Prepayment Amount:"}
                name={"prePaymentAmount"}
                value={prePaymentAmount}
                placeholder={"0.00"}
                handleChange={(event) =>
                  setPrePaymentAmount(event.target.value)
                }
              />{" "}
              <SelectBar
                title={"Prepayment Frequency:"}
                name={"prePaymentFreq"}
                options={preFrequencyOptions}
                value={prePaymentFreq}
                handleChange={(event) => setPrePaymentFreq(event.target.value)}
              />{" "}
              <Input
                inputType={"text"}
                title={"Start With Payment:"}
                name={"startWith"}
                placeholder={"1"}
                value={startWith}
                handleChange={(event) => setStartWith(event.target.value)}
              />{" "}
            </div>
          </form>
        </div>
      </div>
      <div className="w-full max-w-xl mt-10 ml-auto mr-auto">
        <h3 className="font-medium leading-6 text-lg">Calculation Summary</h3>
        <table class="shadow-lg bg-white">
          <tr>
            <th class="bg-white border text-left px-8 py-4">Category</th>
            <th class="bg-white border text-left px-8 py-4">Term</th>
            <th class="bg-white border text-left px-8 py-4">
              Amortization Period
            </th>
          </tr>
          <tr>
            <td class="bg-gray-100 border px-8 py-4">Number of Payments</td>
            <td class="bg-gray-100 border px-8 py-4">{termNumberOfPayments}</td>
            <td class="bg-gray-100 border px-8 py-4">
              {amortizationNumberOfPayments}
            </td>
          </tr>
          <tr>
            <td class="border px-8 py-4">Mortgage Payment</td>
            <td class="border px-8 py-4">{termMortgagePayment}</td>
            <td class="border px-8 py-4">{amortizationMortgagePayment}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 border px-8 py-4">Prepayment</td>
            <td class="bg-gray-100 border px-8 py-4">{termPrepayment}</td>
            <td class="bg-gray-100 border px-8 py-4">
              {amortizationPrepayment}
            </td>
          </tr>
          <tr>
            <td class="border px-8 py-4">Principal Payments</td>
            <td class="border px-8 py-4">{termPrincipalPayments}</td>
            <td class="border px-8 py-4">{amortizationPrincipalPayments}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 border px-8 py-4">Interest Payments</td>
            <td class="bg-gray-100 border px-8 py-4">{termInterestPayments}</td>
            <td class="bg-gray-100 border px-8 py-4">
              {amortizationInterestPayments}
            </td>
          </tr>
          <tr>
            <td class="bg-gray-100 border px-8 py-4">Total Cost</td>
            <td class="bg-gray-100 border px-8 py-4">{termTotalCost}</td>
            <td class="bg-gray-100 border px-8 py-4">
              {amortizationTotalCost}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default PaymentPlan;
