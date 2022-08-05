import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const data = useContext(AppContext);

  // another way to do this:
  // const data = useGlobalContext();
  // it lets you use less imports

  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show modal</button>
    </main>
  );
};

export default Home;
