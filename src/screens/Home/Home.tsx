import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LMButton from "../../components/LMButton";
import { Box } from "@mui/material";
import blooddonation from "../../assests/Blooddonation.png";
import { useNavigate } from "react-router-dom";
import LMNavbar from "../../components/LMNavbar";
import Footer from "../../components/Footer";

const Home = () => {
  
  return (
    <>
      <LMNavbar />
      <Box
        sx={{background: "#f6f5f7" }}
        className="d-flex  justify-content-center align-items-center"
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              className="d-flex  justify-content-center align-items-center flex-column"
              xs={6}
            >
              <h1 className="text-center mb-5">Donate Your Blood for life Saving</h1>
              
            </Grid>

            <Grid xs={6}>
              <img width="100%" src={blooddonation} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
