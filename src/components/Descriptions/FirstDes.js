import chart from "../../assets/Charts.png";
const FirstDes = () => {
  return (
    <>
      <div className="flex flex-col ml-20">
        <div className="text-left mb-5">
          <h3 className="font-medium leading-6 text-lg float-left">
            Mortgage Summary
          </h3>
        </div>
        <div className="text-left mb-3">
          <p> Over the 25-year amortization period, you will:</p>
        </div>
        <ul className="list-disc list-inside text-left">
          <li>have made 300 monthly (12x per year) payments of $581.60.</li>
          <li>
            have paid $100,000.00 in principal, $74,481.50 in interest, for a
            total of $174,481.50.
          </li>
        </ul>
        <div className="text-left mt-3 mb-3">
          <p> Over the 5-year term, you will:</p>
        </div>
        <ul className="list-disc list-inside text-left">
          <li>have made 60 monthly (12x per year) payments of $581.60.</li>
          <li>
            have paid $11,492.50 in principal, $23,403.80 in interest, for a
            total of $34,896.30.
          </li>
        </ul>
        <div className="text-left mt-3 mb-3">
          <p> At the end of your 5-year term, you will:</p>
        </div>
        <ul className="list-disc list-inside text-left">
          <li>have a balance of $88,507.50.</li>
        </ul>
        <div className="text-left mb- mt-10">
          <h3 className="font-medium leading-6 text-lg float-left">
            Payment Diagram
          </h3>
        </div>
        <div>
          <img src={chart} className="mr-auto ml-auto" alt="flag" />
        </div>
      </div>
    </>
  );
};
export default FirstDes;
