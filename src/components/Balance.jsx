import { useState, useEffect } from "react";
import axios from "axios";

export const Balance = ({ value }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("https://quickpaybackend-production.up.railway.app/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []); // Empty array as dependency

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {balance}</div>
    </div>
  );
};

