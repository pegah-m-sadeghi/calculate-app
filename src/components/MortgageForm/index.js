import mortgage from "../../assets/mortgage.png";

const MortgageForm = () => {
  return (
    <>
      <div className="flex ml-20 mt-20 border-b-2 border-red-900 w-10/12">
        <img src={mortgage} className="w-14 h-14 float-left" alt="flag" />

        <h2 className="float-right mt-5">Mortgage Calculator</h2>
      </div>
      <div className=" ml-20 w-10/12 text-left">
        <div>From Financial Consumer Agency of Canada</div>
        <br></br>
        <p>
          This calculator determines your mortgage payment and provides you with
          a mortgage payment schedule. The calculator also shows how much money
          and how many years you can save by making prepayments.
        </p>
        <br></br>
        <p>
          To help determine whether or not you qualify for a home mortgage based
          on income and expenses, visit the Mortgage Qualifier Tool.
        </p>
        <br></br>
        <p>
          Note: As of July 9, 2012, the maximum amortization period for
          mortgages with less than a 20 percent down payment is 25 years.
        </p>
      </div>
    </>
  );
};
export default MortgageForm;
