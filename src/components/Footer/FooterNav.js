import footer from "../../assets/Footer.png";
const FooterNav = () => {
  return (
    <>
      <div className="flex">
        <div className="w-10/12 ml-5">
          <ul className="flex text-sm text-left mt-10 list-disc list-inside">
            <li className="mr-6">
              <a className="hover:text-blue-800" href="#">
                Social media
              </a>
            </li>

            <li className="mr-6">
              {" "}
              <a className="hover:text-blue-800" href="#">
                Mobile applications
              </a>
            </li>
            <li className="mr-6">
              {" "}
              <a className="hover:text-blue-800" href="#">
                About Canada.ca
              </a>
            </li>
            <li className="mr-6">
              {" "}
              <a className="hover:text-blue-800" href="#">
                Terms and conditions
              </a>
            </li>
            <li className="mr-6 list-disc">
              {" "}
              <a className="hover:text-blue-800" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 mb-10">
          <img src={footer} alt="flag" />
        </div>
      </div>
    </>
  );
};
export default FooterNav;
