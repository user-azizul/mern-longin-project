import React, { useEffect, useState } from "react";
import { handleError, handleSuccess } from "../utils/Utils";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(null);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    setLoggedin(localStorage.getItem("Logged in user"));
    fetchProducts();
  }, []);

  function handleLogOut() {
    handleSuccess("Logged out");
    localStorage.removeItem("token");
    localStorage.removeItem("Logged in user");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  const fetchProducts = async () => {
    try {
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      };
      const url = `https://mern-neon-eight.vercel.app/products`;
      const res = await fetch(url, headers);

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {loggedin}</h1>
      <button
        onClick={handleLogOut}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 mb-4"
      >
        Log out
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {Products.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-500 hover:bg-gray-100"
              >
                <td className="py-3 px-6 font-semibold text-base">
                  {item.name}
                </td>
                <td className="py-3 px-6 font-semibold text-base">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
