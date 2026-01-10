import { BsFillBagPlusFill } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import {HashLink as Link} from 'react-router-hash-link';
import Button from "../Button";
import { useContext } from "react";
import { CartToggleContext } from "../../context/CartToggleContext";
import Cart from "../Cart/Cart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isCartOpen , setIsCartOpen} = useContext(CartToggleContext);
  const userName = useAppSelector((state) => state.auth.userName);
  const dispatch = useAppDispatch();
  
  return (
    <div className="navbar flex items-center justify-between p-4 px-20 relative">
      <div className="logo text-white text-xl">NShopping</div>
      <div className="navlinks text-white flex gap-6">
        <Link smooth to="#">
          Home
        </Link>
        <Link smooth to="#products">
          Products
        </Link>
        <Link smooth to="#collections">
          Collection
        </Link>
        <Link smooth to="#about">
          About
        </Link>
      </div>
      <div className="actions flex items-center gap-4 text-white">
        
          <div className="cart text-lg relative">
            <BsFillBagPlusFill
              className="cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
          </div>
        
        {userName !== "" ? (
          <div>
            <Button
              title="Logout"
              styleClass="bg-white text-black px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 transition duration-300"
              type="button"
              onClick={() => {
                dispatch({ type: "auth/logOut" });
                navigate("/");
              }}
              disabled={false}
            />
          </div>
        ) : (
          <div>
            <Button
              title="Login"
              styleClass="bg-white text-black px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 transition duration-300"
              type="button"
              onClick={() => {
                navigate("/login");
              }}
              disabled={false}
            />
            <Button
              title="Sign Up"
              styleClass="bg-white text-black px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 transition duration-300"
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
              disabled={false}
            />
          </div>
        )}
      </div>
      {isCartOpen && <Cart />}
    </div>
  );    
};

export default Navbar;
