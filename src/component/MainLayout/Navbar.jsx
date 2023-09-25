import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div  >
            <nav className=" text-center  flex  justify-between py-5 px-2 shadow-md   items-center">
                <div>
                    <img className="w-[182px]" src="/Resources/Logo.png" alt="" />
                </div>
                <ul className="flex gap-8">
                    <li>
                    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-green-300" : ""
  }
>
  Home
</NavLink>
                    </li>

                    <li>
                    <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-green-300" : ""
  }
>
Donation
</NavLink>
                    </li>

                    <li>
                    <NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline font-bold text-green-300" : ""
  }
>
  Statistics
</NavLink>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
};

export default Navbar;