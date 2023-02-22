import { useEffect, useLayoutEffect, useState } from "react";
import React from "react";
import Web3 from "web3";
import VestingInterface from "./VestingInterface";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TokenAbi = require("../abi/HyperLeague.json");
const VestingAbi = require("../abi/HyperLeagueVesting.json");
const tokenAddress = process.env.REACT_APP_TOKEN;
const vestingAddress = process.env.REACT_APP_VESTING;

require("dotenv").config();
var web3 = "";
var tokenObj = "";
var vesting = "";

const Data = (props) => {

    const [account, setAccount] = useState("");
    const [walletConnect, setWalletConnect] = useState(false);

    useEffect(() => {

        new Promise((resolve, reject) => {
            if (typeof window.ethereum !== "undefined") {
                web3 = new Web3(window.ethereum);
                // contractObj = new web3.eth.Contract(TokenAbi.abi, tokenAddress);

                resolve("OK ********************************");
            }
            reject();
        });
    }, []);

    //Function to change the Network of MetaMask and add the network if not already present
    const changeNetwork = async () => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x5' }],
            });
        } catch (error) {
            if (error.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainName: 'Goerli Testnet',
                            chainId: web3.utils.toHex(5),
                            nativeCurrency: { name: 'GETH', decimals: 18, symbol: 'GETH' },
                            rpcUrls: ['https://goerli.prylabs.net/']
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
            userAccount = accounts[0];
            localStorage.setItem("account", accounts[0]);

            let networkId = await web3.eth.getChainId();
            if (networkId != 5) {
                changeNetwork();
            }

            setWalletConnect(true);

        } catch (error) {
            console.log("Error Connect Wallet", error);
        }
    }
}