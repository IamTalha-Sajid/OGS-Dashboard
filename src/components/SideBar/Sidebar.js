import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from '@mui/icons-material/Person';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CalculateIcon from '@mui/icons-material/Calculate';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const SideBar = () => {
  return (
    <>
      {/* <div className="sidebar">
            <div className="head">
                <div className="logo">
                    <img src="img/logo-admin.png" alt="" />
                </div>
            </div>
            <div id="list">
                <ul className="nav flex-column">
                    <li className="nav-item"><a href="index.html" className="nav-link active"><i className="fa fa-dashboard"></i>Dashboard</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><i className="fa fa-user"></i>Account</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><i className="fa fa-exchange"></i>Swap</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><i className="fa fa-mobile"></i>Calculator</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><i className="fa fa-chart-area"></i>Analytics</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><i className="fa fa-file"></i>Docs</a></li>
                </ul>
            </div>
        </div> */}
      <Box
        sx={{
          width: "20vw",
          borderRight: "2px solid goldenrod",
          borderLeft: "2px solid goldenrod",
          boxShadow: "0px 12px 20px 0px rgb(0 0 0 / 9%)",
          postion: "fixed",
          height: "100vh",
          overflow: "hidden !important",
          display: {xs:'none',md:'flex'},
          flexDirection: "column",
          paddingTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginX: "auto",
            flexDirection: "column",
            alignItems: "center",
           

          }}
        >
          <ul>
            <li>
              <NavLink to="/Dashboard"><LanguageIcon />Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/my-account"><PersonIcon/>Account</NavLink>
            </li>
           
            <li>
              <NavLink to="/create-contract">< SwapHorizIcon/>Swap</NavLink>
            </li>
            <li>
              <NavLink to="/create-contract">< CalculateIcon/>Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/create-contract">< StackedBarChartIcon/>Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/create-contract">< InsertDriveFileIcon/>Docs</NavLink>
            </li>
          </ul>
         
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
