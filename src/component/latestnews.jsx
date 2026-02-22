import { Box } from "@mui/material";
import React from "react";
import image from "../assets/div.elementor-widget-wrap.png";

export default function LatestNes(){
    return (
        <>
            <Box  sx={{
         
          display: "flex",
                justifyContent: "center",
                  marginRight:{xs:"28px", md:"100px"},
                
          height:{xs:"14rem", sm:"10rem", md:"42rem" },
          padding:{xs:"1rem", md:"3rem" }
        }} >
                <img src={image} />
            </Box>
        </>
    )
        ;
}