import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import TruckCard from "../components/home/TruckCard";
import axios from "axios";

const Home = () => {
    const [trucks, setTrucks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios
        .get("https://transport-orpin.vercel.app/trucks")
        .then((response) => {
          setTrucks(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-bold">Trucks List</h1>
        <Link to="/trucks/add">
          <IoIosAddCircle className="text-green-800 text-4xl" />
        </Link>
      </div>

      {loading ? <Spinner /> : <TruckCard trucks={trucks}/>}
    </div>
  );
};

export default Home;
