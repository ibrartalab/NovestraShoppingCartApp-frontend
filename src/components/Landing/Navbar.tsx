import { BsFillBagPlusFill } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import {HashLink as Link} from 'react-router-hash-link';
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-4 px-20">
      <div className="logo text-white text-xl">NShopping</div>
      <div className="navlinks text-white flex gap-6">
        <Link smooth to="#">Home</Link>
        <Link smooth to="#products">Products</Link>
        <Link smooth to="#collections">Collection</Link>
        <Link smooth to="#about">About</Link>
      </div>
      <div className="actions flex items-center gap-4 text-white">
        <div className="search text-lg">
          <LuSearch className="cursor-pointer"/>
        </div>
        <div className="cart text-lg">
          <BsFillBagPlusFill className="cursor-pointer"/>
        </div>
        <Button
          title="Sign In"
          styleClass="bg-white text-black px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 transition duration-300"
          type="button"
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </div>
  );    
};

export default Navbar;
