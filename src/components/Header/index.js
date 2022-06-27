import flag from "../../assets/flag.png";
import { default as SearchBar } from "../SearchBar";
import { default as Nav } from "../Nav";
const Header = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border-b-4 border-sky-900">
        <div className="mr-6 ml-20 mt-12">
          <img src={flag} className="max-w-full" alt="flag" />
        </div>
        <div className="mr-6">
          <SearchBar />
        </div>
      </div>
      <div>
        <Nav />
      </div>
    </>
  );
};
export default Header;
