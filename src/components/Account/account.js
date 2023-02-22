import Web3 from "web3";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import "./account.css";

const Account = () => {
  const [account, setAccount] = useState("");
  const [totalBNBs, setTotalBNBs] = useState(0);
  const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));

  useEffect(() => {

    if (localStorage.getItem("account")) {
      console.log("Account Found", localStorage.getItem("account"));
      const checksumAddress = web3.utils.toChecksumAddress(localStorage.getItem("account"));
      console.log("Checksum Address", checksumAddress);
      setAccount(checksumAddress);
      
      //Find the Totals BNBs of account using web3
      web3.eth.getBalance(checksumAddress, function (err, result) {
        if (err) {
          console.log(err)
        } else {
          setTotalBNBs(web3.utils.fromWei(result, "ether"));
        }
      })
    }

  }, [account]);
  return (
    <>
      {/** Current Connected Account Details */}
      <div className="account-details">
        <Typography variant="h1" style={{ color: "white" }}>Account Address</Typography>
        <Typography variant="body1" style={{ color: "white" }}>{account}</Typography>
        <Typography variant="h1" style={{ color: "white" }}>Total BNBs</Typography>
        <Typography variant="body1" style={{ color: "white" }}>{totalBNBs}</Typography>
      </div>
    </>
  );
};

export default Account;