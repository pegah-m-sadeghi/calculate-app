import Button from "../Button";

const LastDes = () => {
  return (
    <>
      <div className="flex flex-col ml-20 mr-20 mt-6 text-left">
        <div className="mb-3">
          <p>
            A Summary Report (printable) can be produced based on values you
            entered into the calculator. This report includes all your data,
            calculation results and payment schedule (by year and by period).
          </p>
        </div>
        <div className="mb-10">
          <Button type={"primary"} title={"Summary Report ..."} />
        </div>
        <div className="mb-5">
          <h3 className="font-medium leading-6 text-lg float-left">
            Rate This Tool
          </h3>
        </div>
        <div className="mb-3">
          <p>
            We want to hear from you! Please tell us what you think of this tool
            and how we can make it better.
          </p>
        </div>
        <div className="mb-3">
          <p>
            We offer this mortgage calculator as a self-help tool for your use.
            This tool does not replace professional financial advice. We cannot
            guarantee that this calculator will apply or be accurate in your
            situation. For example, your mortgage lender may make its
            calculations in a different way. All calculations are examples only.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-10">
            <Button type={"primary"} title={"Report a problem on this page"} />
          </div>
          <div className="mb-10 text-right">
            <Button type={"primary"} title={"Share this page"} />
          </div>
        </div>
        <span>Date modified:2022-03-20</span>
      </div>
    </>
  );
};
export default LastDes;
