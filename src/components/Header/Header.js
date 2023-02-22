import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import Web3 from "web3";
import { NavLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from '@mui/icons-material/Person';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CalculateIcon from '@mui/icons-material/Calculate';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MenuIcon from '@mui/icons-material/Menu';

let web3;

const Header = () => {
    //Use Effect to create Web3 Object at the loading of page
    useEffect(() => {

      new Promise((resolve, reject) => {
        if (typeof window.ethereum !== "undefined") {
          web3 = new Web3(window.ethereum);
  
          resolve("OK ********************************");
        }
        reject();
      });
    }, []);

  const [account, setAccount] = useState("");
  const [walletConnectStatus, setWalletConnectStatus] = useState(false);


  //Function to change the Network of MetaMask and add the network if not already present
  const changeNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }],
      });
    } catch (error) {
      if (error.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainName: 'Smart Chain - Testnet',
              chainId: web3.utils.toHex(97),
              nativeCurrency: { name: 'TBNB', decimals: 18, symbol: 'TBNB' },
              rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
            }
          ]
        });
      }
      console.log(error);
    }
  };

  //Function to connect MetaMask
  const connectWallet = async () => {
    try {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      window.ethereum.on('networkChanged', function (networkId) {
        window.location.reload();
      });
      setAccount(accounts[0])
      localStorage.setItem("account", accounts[0]);

      let networkId = await web3.eth.getChainId();
      if (networkId !== 97) {
        changeNetwork();
      }

      setWalletConnectStatus(true);

    } catch (error) {
      console.log("Error Connect Wallet", error);
    }
  }

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{
      display: 'flex', alighnItems: 'center', width: { xs: '100vw', md: '80vw' }, borderBottom: "2px solid goldenrod", paddingBottom: "2rem",
      paddingTop: "2rem",
    }}>
      <MenuIcon onClick={() => handleDrawerToggle()} sx={{ color: '#fff', height: '40px', width: '30px', display: { xs: 'block', md: 'none' } }} />
      <Box
        sx={{
          width: { xs: '100vw', md: '80vw' },

          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: { xs: '0', md: '4rem' },
          gap: '2rem',

        }}
      >

        <Button sx={{ width: '180px' }} variant="outlined">OGSAFUU $1.36</Button>
        <Button sx={{ width: '180px' }} variant="contained" onClick={connectWallet} disabled={walletConnectStatus ? true:false}>{walletConnectStatus ? "Connected" : "Connect Wallet"}</Button>

        <Drawer open={mobileOpen}
          onClose={handleDrawerToggle}>
          <ul>
            <li>
              <NavLink to="/Dashboard"><LanguageIcon />Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={{path:"/my-account", state:{account}}}><PersonIcon />Account</NavLink>
            </li>

            <li>
              <NavLink to="/h1">< SwapHorizIcon />Swap</NavLink>
            </li>
            <li>
              <NavLink to="/h2">< CalculateIcon />Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/h3">< StackedBarChartIcon />Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/h4">< InsertDriveFileIcon />Docs</NavLink>
            </li>
          </ul>
        </Drawer>

      </Box>
    </Box>

  );
};

export default Header;
