import { Box } from "@mui/system";
import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      {/* <div id="dashboard" style={{backgroundColor: 'black' }}>
        
          <div className="content">
            <div id="real">
              <div className="row">
                <div className="col-lg-4">
                  <div className="analytics">
                    <div className="card card-bg">
                      <div className="text">
                        <h1>% TAX to OG FirePit</h1>
                        <p>0%</p>
                      </div>
                    </div><br />
                      <div className="card">
                        <div className="text">
                          <h1>Total Supply</h1>
                          <p>61,634,066.59</p>
                        </div>
                      </div>
                      <div className="card">
                        <div className="text">
                          <h1>Circulating Supply</h1>
                          <p>0</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="analytics">
                    <div id="active">
                      <div className="card">
                        <div className="text">
                          <h1>OGSAFUU PRICE</h1>
                          <p>$0</p>
                          <div id="app" className="circleBase type3"></div><br />
                            <h1>Rebasing...</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card ">
                      <div className="text ">
                        <h1>OG Insurance Fund Value</h1>
                        <p>$0</p>
                      </div>
                    </div>
                    <div className="card ">
                      <div className="text ">
                        <h1>MarketCap</h1>
                        <p>0</p>
                      </div>
                    </div>
                    <div className="card ">
                      <div className="text ">
                        <h1>Pool Value</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card glow_dashboard">
                      <div className="text ">
                        <h1># Value of OG FirePit</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card glow_dashboard">
                      <div className="text ">
                        <h1>$ Value of OG FirePit</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card glow_dashboard">
                      <div className="text ">
                        <h1>% OG FirePit : Supply</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div> */}
      <Box sx={{ paddingX: { md: '4%', sm: '5%', lg: '10%' }, mt: 5 }}>
        <Box
          sx={{
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: { xs: 'repeat(1, 280px)', md: 'repeat(3, 1fr)' },
            gap: 2,
            marginX: 'auto',
            alighnItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Paper
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>

          <Paper
            sx={{
              gridColumn: { xs: '', md: '2' },
              gridRow: "1 / 4",
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: "flex",
              flexDirection: "column",
              gap: '1.5rem',
              paddingY: '1.5rem'
            }}
          >
            <Paper
              sx={{
                backgroundColor: "transparent",
                border: "2px solid rgba(218,165,32,.63)",
                width: "80%",
                display: "flex",
                alighnItems: "center",
                marginX: "auto",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "14px",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  alighnItems: "center",
                  marginX: "auto",
                }}
                variant="h2"
              >
                OG SAFUU PRICE
              </Typography>
            </Paper>

            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              $1.3696
            </Typography>
            <Box
              sx={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                border: "2px solid rgba(218,165,32,.63)",
                display: "flex",
                alighnItems: "center",
                marginX: "auto",

              }}
              id='app'
            > <Typography
              sx={{
                fontSize: "22px",
                color: "goldenrod",
                display: 'flex',
                alighnItems: 'center',
                justifyContent: 'center',
                margin: 'auto'
              }}
              variant="h2"
              id='text'
            >
                Rebassing
              </Typography></Box>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>

          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit      {/* <div id="dashboard" style={{backgroundColor: 'black' }}>
        
        <div className="content">
          <div id="real">
            <div className="row">
              <div className="col-lg-4">
                <div className="analytics">
                  <div className="card card-bg">
                    <div className="text">
                      <h1>% TAX to OG FirePit</h1>
                      <p>0%</p>
                    </div>
                  </div><br />
                    <div className="card">
                      <div className="text">
                        <h1>Total Supply</h1>
                        <p>61,634,066.59</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="text">
                        <h1>Circulating Supply</h1>
                        <p>0</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="analytics">
                  <div id="active">
                    <div className="card">
                      <div className="text">
                        <h1>OGSAFUU PRICE</h1>
                        <p>$0</p>
                        <div id="app" className="circleBase type3"></div><br />
                          <h1>Rebasing...</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="analytics ">
                  <div className="card ">
                    <div className="text ">
                      <h1>OG Insurance Fund Value</h1>
                      <p>$0</p>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="text ">
                      <h1>MarketCap</h1>
                      <p>0</p>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="text ">
                      <h1>Pool Value</h1>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="analytics ">
                  <div className="card glow_dashboard">
                    <div className="text ">
                      <h1># Value of OG FirePit</h1>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="analytics ">
                  <div className="card glow_dashboard">
                    <div className="text ">
                      <h1>$ Value of OG FirePit</h1>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="analytics ">
                  <div className="card glow_dashboard">
                    <div className="text ">
                      <h1>% OG FirePit : Supply</h1>
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div> */}
    <Box sx={{ paddingX: { md: '4%', sm: '5%', lg: '10%' }, mt: 5 }}>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: { xs: 'repeat(1, 280px)', md: 'repeat(3, 1fr)' },
          gap: 2,
          marginX: 'auto',
          alighnItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>

        <Paper
          sx={{
            gridColumn: { xs: '', md: '2' },
            gridRow: "1 / 4",
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: "flex",
            flexDirection: "column",
            gap: '1.5rem',
            paddingY: '1.5rem'
          }}
        >
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              width: "80%",
              display: "flex",
              alighnItems: "center",
              marginX: "auto",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "14px",
                padding: "0",
                margin: "0",
                display: "flex",
                alighnItems: "center",
                marginX: "auto",
              }}
              variant="h2"
            >
              OG SAFUU PRICE
            </Typography>
          </Paper>

          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            $1.3696
          </Typography>
          <Box
            sx={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              border: "2px solid rgba(218,165,32,.63)",
              display: "flex",
              alighnItems: "center",
              marginX: "auto",

            }}
            id='app'
          > <Typography
            sx={{
              fontSize: "22px",
              color: "goldenrod",
              display: 'flex',
              alighnItems: 'center',
              justifyContent: 'center',
              margin: 'auto'
            }}
            variant="h2"
            id='text'
          >
              Rebassing
            </Typography></Box>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>

        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "transparent",
            border: "2px solid rgba(218,165,32,.63)",
            display: 'flex',
            flexDirection: 'column',
            marginY: 'auto',
            paddingY: '1.5rem'
          }}
        >

          <Typography
            sx={{ fontSize: "14px", padding: "0", margin: "0" }}
            variant="h2"
          >
            % TAX To OG FirePit
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "goldenrod",
              padding: "0",
              margin: "0",
            }}
            variant="h2"
          >
            2.5%
          </Typography>
        </Paper>
      </Box>
    </Box>      {/* <div id="dashboard" style={{backgroundColor: 'black' }}>
        
          <div className="content">
            <div id="real">
              <div className="row">
                <div className="col-lg-4">
                  <div className="analytics">
                    <div className="card card-bg">
                      <div className="text">
                        <h1>% TAX to OG FirePit</h1>
                        <p>0%</p>
                      </div>
                    </div><br />
                      <div className="card">
                        <div className="text">
                          <h1>Total Supply</h1>
                          <p>61,634,066.59</p>
                        </div>
                      </div>
                      <div className="card">
                        <div className="text">
                          <h1>Circulating Supply</h1>
                          <p>0</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="analytics">
                    <div id="active">
                      <div className="card">
                        <div className="text">
                          <h1>OGSAFUU PRICE</h1>
                          <p>$0</p>
                          <div id="app" className="circleBase type3"></div><br />
                            <h1>Rebasing...</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card ">
                      <div className="text ">
                        <h1>OG Insurance Fund Value</h1>
                        <p>$0</p>
                      </div>
                    </div>
                    <div className="card ">
                      <div className="text ">
                        <h1>MarketCap</h1>
                        <p>0</p>
                      </div>
                    </div>
                    <div className="card ">
                      <div className="text ">
                        <h1>Pool Value</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card glow_dashboard">
                      <div className="text ">
                        <h1># Value of OG FirePit</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card glow_dashboard">
                      <div className="text ">
                        <h1>$ Value of OG FirePit</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="analytics ">
                    <div className="card glow_dashboard">
                      <div className="text ">
                        <h1>% OG FirePit : Supply</h1>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div> */}
      <Box sx={{ paddingX: { md: '4%', sm: '5%', lg: '10%' }, mt: 5 }}>
        <Box
          sx={{
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: { xs: 'repeat(1, 280px)', md: 'repeat(3, 1fr)' },
            gap: 2,
            marginX: 'auto',
            alighnItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Paper
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>

          <Paper
            sx={{
              gridColumn: { xs: '', md: '2' },
              gridRow: "1 / 4",
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: "flex",
              flexDirection: "column",
              gap: '1.5rem',
              paddingY: '1.5rem'
            }}
          >
            <Paper
              sx={{
                backgroundColor: "transparent",
                border: "2px solid rgba(218,165,32,.63)",
                width: "80%",
                display: "flex",
                alighnItems: "center",
                marginX: "auto",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "14px",
                  padding: "0",
                  margin: "0",
                  display: "flex",
                  alighnItems: "center",
                  marginX: "auto",
                }}
                variant="h2"
              >
                OG SAFUU PRICE
              </Typography>
            </Paper>

            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              $1.3696
            </Typography>
            <Box
              sx={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                border: "2px solid rgba(218,165,32,.63)",
                display: "flex",
                alighnItems: "center",
                marginX: "auto",

              }}
              id='app'
            > <Typography
              sx={{
                fontSize: "22px",
                color: "goldenrod",
                display: 'flex',
                alighnItems: 'center',
                justifyContent: 'center',
                margin: 'auto'
              }}
              variant="h2"
              id='text'
            >
                Rebassing
              </Typography></Box>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>

          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
        </Box>
      </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
          <Paper
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgba(218,165,32,.63)",
              display: 'flex',
              flexDirection: 'column',
              marginY: 'auto',
              paddingY: '1.5rem'
            }}
          >

            <Typography
              sx={{ fontSize: "14px", padding: "0", margin: "0" }}
              variant="h2"
            >
              % TAX To OG FirePit
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "goldenrod",
                padding: "0",
                margin: "0",
              }}
              variant="h2"
            >
              2.5%
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
