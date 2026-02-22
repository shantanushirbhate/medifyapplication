import React from "react";
import image from "../assets/ourfamilyes.png"
import { Box } from "@mui/material";

export default function OurFamilyes() {
    return (
        <>
            <Box sx={{
         backgroundColor:"#E7F0FF",
          display: "flex",
                justifyContent: "center",
                //   marginRight:{xs:"28px", md:"20px"},
                
          height:{xs:"14rem", sm:"10rem", md:"42rem" },
          padding:{xs:"1rem", md:"3rem" }
        }} >
                <img src={image} />
        </Box>
        </>
    )
}