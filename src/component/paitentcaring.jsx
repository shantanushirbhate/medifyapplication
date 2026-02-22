import { Box } from "@mui/material";
import React from "react";
import image from "../assets/patientcaring.png";

export default function PatientCaring() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E7F0FF",
          display: "flex",
                  justifyContent: "center",
                
          height:{xs:"11rem", sm:"10rem", md:"30rem" },
          padding:{xs:"1rem", md:"3rem" }
        }}
      >
        <img src={image} />
      </Box>
    </>
  );
}
