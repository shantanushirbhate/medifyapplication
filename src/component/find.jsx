import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Style from "./find.module.css";

import imga from "../assets/iconviewall/Frame 1000011411 (1).png";
import imgb from "../assets/iconviewall/Frame 1000011411 (2).png";
import imgc from "../assets/iconviewall/Frame 1000011411 (3).png";
import imgd from "../assets/iconviewall/Frame 1000011411 (4).png";
import imge from "../assets/iconviewall/Frame 1000011411 (5).png";
import imgf from "../assets/iconviewall/Frame 1000011411 (6).png";
import imgg from "../assets/iconviewall/Frame 1000011411 (7).png";
import imgh from "../assets/iconviewall/Frame 1000011411 (8).png";

const images = [
  { id: 1, src: imga, alt: "image1" },
  { id: 2, src: imgb, alt: "image2" },
  { id: 3, src: imgc, alt: "image3" },
  { id: 4, src: imgd, alt: "image4" },
  { id: 5, src: imge, alt: "image5" },
  { id: 6, src: imgf, alt: "image6" },
  { id: 7, src: imgg, alt: "image7" },
  { id: 8, src: imgh, alt: "image8" },
];

export default function Findbyspecialisation() {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? images : images.slice(0, 4);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#E7F0FF",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1 className={Style.find}>Find By Specialisation</h1>

      {/* Image Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          // margin: 10,
        }}
      >
        {displayedImages.map((item) => (
          <Box
            sx={{
              backgroundColor: "white",
              height: "10rem",
            paddingTop:"10px"
           
            }}
            key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: {
                  sx: "100%",
                  sm: "100%",
                  md:"100%"
                },
             
              }}
            />
          </Box>
        ))}
      </Box>

    
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </Button>
      </Box>
    </Box>
  );
}