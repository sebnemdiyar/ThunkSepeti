import { ShoppingBasket, UtensilsCrossed } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { basket } = useSelector((store) => store.basket);
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const { restaurants } = useSelector((store) => store.restaurant);

  const nearbyCount = restaurants?.length || 0;

  return (
    <header className="shadow">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="font-sr text-red-500 font-bold text-2xl lg:text-3xl tracking-tight"
        >
          Thunk Sepeti
        </Link>

        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            Yakınızda {nearbyCount} <UtensilsCrossed className="text-red-500" />{" "}
            <span className="max-md:hidden">
              restoran{nearbyCount > 1 && " var"}
            </span>
          </Link>
          <Link
            to="/cart"
            className="px-3 py-2 hover:bg-red-100 transition flex items-center rounded-full gap-2"
          >
            <ShoppingBasket />
            <span>{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
