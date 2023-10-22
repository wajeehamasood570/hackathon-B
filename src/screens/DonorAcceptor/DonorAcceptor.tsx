import React from "react";
import LMButton from "../../components/LMButton";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DonorAcceptor = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ height: "100vh", background: "#f6f5f7" }}
      className="d-flex  justify-content-center align-items-center flex-column"
    >
      <h2 className="mb-3">Welcome to LifeSaver Application</h2>

      <LMButton onClick={()=>navigate('/donor')} label="Proceed as Donor" />
      <p></p>
      <LMButton onClick={()=>navigate('/acceptor')} label="Proceed as Acceptor" />
    </Box>
  );
};

export default DonorAcceptor;
