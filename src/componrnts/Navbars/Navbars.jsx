import { useState } from "react";
import Link from "../Link/Link";
import { MdMenu, MdClose } from "react-icons/md";
import StudentChart from "../LineChart/LineChart";


const Navbars = () => {
  const [opne, setopen] = useState(false);
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
      element: "<Home />",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
      element: "<About />",
    },
    {
      id: 3,
      path: "/products",
      name: "Products",
      element: "<Products />",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact",
      element: "<Contact />",
    },
    {
      id: 5,
      path: "/cart",
      name: "Cart",
      element: "<Cart />",
    },
  ];

  return (
    <nav>
      <div onClick={() => setopen(!opne)} className=" text-2xl md:hidden">
        {opne === true ? <MdClose /> : <MdMenu />}
      </div>

      <ul
        className={`md:flex absolute duration-1500 ${opne ? '-top-50': 'top-10 md:top-5'} bg-green-600 pl-15 z-500`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}>
            {" "}
          </Link>
        ))}
      </ul>
      <StudentChart></StudentChart>
    </nav>
  );
};
export default Navbars;
