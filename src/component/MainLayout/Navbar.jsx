import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div  >
            <nav className=" text-center  md:flex  md:justify-between py-5 px-2 shadow-md   items-center">
                <div className="flex justify-center items-center">
                    <img className="w-[182px]" src="/Resources/Logo.png" alt="" />
                </div>
                <ul className="flex gap-8 items-center justify-center">
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