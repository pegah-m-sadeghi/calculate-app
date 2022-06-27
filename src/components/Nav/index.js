const Nav = () => {
  return (
    <>
      <ul className="flex ml-20 mt-10">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-blue-500 hover:text-blue-800 before:content-['>'] "
            href="#"
          >
            Money and finances
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-blue-500 hover:text-blue-800 before:content-['>'] "
            href="#"
          >
            Debt and borrowing
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-blue-500  hover:text-blue-800 before:content-['>'] "
            href="#"
          >
            Mortgages
          </a>
        </li>
      </ul>
    </>
  );
};
export default Nav;
