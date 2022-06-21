import React from "react";
import Input from "../../Input";
import SelectBar from "../../SelectBar";
import { useState, useEffect } from "react";
function PaymentPlan() {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [amortizationPeriodYear, setAmortizationPeriodYear] =
    useState("1 year");
  const [amortizationPeriodMonth, setAmortizationPeriodMonth] =
    useState("1 month");
  const [totalAmortizationPeriod, setTotalAmortizationPeriod] = useState(0);
  const [paymentFreq, setPaymentFreq] = useState("Monthly");
  const [term, setTerm] = useState("1 year");
  const [prePaymentAmount, setPrePaymentAmount] = useState(0);
  const [prePaymentFreq, setPrePaymentFreq] = useState("One time");
  const [startWith, setStartWith] = useState(0);
  const [termNumberOfPayments, setTermNumberOfPayments] = useState(0);
  const [amortizationNumberOfPayments, setAmortizationNumberOfPayments] =
    useState(0);
  const [amortizationMortgagePayment, setAmortizationMortgagePayment] =
    useState(0);
  const [termMortgagePayment, setTermMortgagePayment] = useState(0);
  const [mortgagePayment, setMortgagePayment] = useState(0);
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
  const yearOptions = ["1 year", "2 years", "3 years", "25 years"];
  const monthOptions = ["1 month", "2 months", "3 months"];
  const frequencyOptions = [
    "Accelerated Weekly",
    "Weekly",
    "Accelerated Bi-weekly",
    "Bi-Weekly",
    "Semi-monthly",
    "Monthly",
  ];
  const termOptions = [
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",
  ];
  const preFrequencyOptions = [
    "One time",
    "Each year",
    "Same as regular payment",
  ];
  let numberOfFreq = 0;
  function calcNumberOfFreq() {
    if (paymentFreq === "Weekly") {
      numberOfFreq += 40;
    } else if (paymentFreq === "Accelerated Weekly") {
      numberOfFreq += 30;
    } else if (paymentFreq === "Bi-Weekly") {
      numberOfFreq += 25;
    } else if (paymentFreq === "Accelerated Bi-weekly") {
      numberOfFreq += 15;
    } else if (paymentFreq === "Semi-monthly") {
      numberOfFreq += 10;
    } else if (paymentFreq === "Monthly") {
      numberOfFreq += 5;
    }
    return numberOfFreq;
  }
  calcNumberOfFreq();

  let numberOfPreFreq = 0;
  function calcNumberOfPreFreq() {
    if (prePaymentFreq === "One time") {
      numberOfPreFreq += 40;
    } else if (prePaymentFreq === "Each year") {
      numberOfPreFreq += 30;
    } else if (prePaymentFreq === "Same as regular payment") {
      numberOfPreFreq += 20;
    }
    return numberOfPreFreq;
  }
  calcNumberOfPreFreq();
  useEffect(() => {
    setTotalAmortizationPeriod(
      parseInt(amortizationPeriodYear) * 12 +
        parseInt(amortizationPeriodMonth) +
        parseInt(prePaymentAmount) * numberOfFreq
    );
    setMortgagePayment(numberOfFreq + numberOfPreFreq + parseInt(startWith));
  }, [
    amortizationPeriodYear,
    amortizationPeriodMonth,
    numberOfFreq,
    numberOfPreFreq,
    prePaymentAmount,
    startWith,
  ]);
  useEffect(() => {
    setAmortizationNumberOfPayments(totalAmortizationPeriod);
    setAmortizationMortgagePayment(totalAmortizationPeriod);
    setAmortizationPrepayment(totalAmortizationPeriod);
    setAmortizationPrincipalPayments(totalAmortizationPeriod);
    setAmortizationInterestPayments(totalAmortizationPeriod);
    setAmortizationTotalCost(totalAmortizationPeriod);
  }, [totalAmortizationPeriod]);
  useEffect(() => {
    setTermNumberOfPayments(
      parseInt(mortgageAmount) +
        parseInt(interestRate) +
        totalAmortizationPeriod * parseInt(term) * 12
    );
    setTermMortgagePayment(totalAmortizationPeriod);
    setTermPrepayment(totalAmortizationPeriod);
    setTermPrincipalPayments(totalAmortizationPeriod);
    setTermInterestPayments(totalAmortizationPeriod);
    setTermTotalCost(totalAmortizationPeriod);
  }, [totalAmortizationPeriod, mortgageAmount, interestRate, term]);

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
              handleChange={(event) => setPaymentFreq(event.target.value)}
            />
            <SelectBar
              title={"Term:"}
              name={"term"}
              options={termOptions}
              value={term ? term : termOptions[4]}
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
}
export default PaymentPlan;
