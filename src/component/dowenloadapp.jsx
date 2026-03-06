import { React, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import Styles from "../component/dowenloadapp.module.css";

import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

import image1 from "../assets/DownloadApp.png";
import image2 from "../assets/mobilezindex.png";
import image3 from "../assets/footerimage.png";

export default function DownloadApp() {
  const [countryCode, setCountryCode] = useState("");

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E7F0FF",
          height: "32rem",
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
        }}
      >
        {/* Mobile Image */}
        <Box
          component="img"
          alt="mobile"
          src={image2}
          sx={{
            width: { xs: "40%" ,sm: "50%" ,md: "55%" },
            marginTop:{xs:"20rem", sm:"10px", md:"10px"},
            height: { xs: "20rem", sm: "70px", md: "45rem" },
        
          }}
        ></Box>

        <Box sx={{ Width: "100%", marginTop: "60px" }}>
          
          <Box component="img" src={image1}
            alt="Download App"
            sx={{ width: { xs: "65%" } }}
            gap="2"
          >

          </Box>
        

          <Typography variant="h6" gutterBottom
            sx={{
              width: { xs: "100%", sm:"80%", md:"100%" },
            
              fontSize: { xs: "14px", md: "18px" },
            }}
          
          >
            Get the link to download the app
          </Typography>

          <Box
            sx={{
              display: "flex",
            gap:3,
            flexDirection: { xs: "column", sm: "row" },

            }}
          >
            <FormControl sx={{ minWidth: 80 }}>
              <InputLabel>Code</InputLabel>
              <Select value={countryCode} label="code" onChange={handleChange}>
                <MenuItem value="+91">+91</MenuItem>
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
              </Select>
            </FormControl>

            <TextField
              
              placeholder="Enter Your Number"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2AA7FF",
                textTransform: "none",
              }}
            >
              Send Link
            </Button>
          </Box>
          {/* Store Buttons */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* Google Play Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                width: "10rem",
                px: 2,
                py: 3.5,
                height: "50px",
                borderRadius: "12px",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    gap: 1,
                  }}
                >
                  {<AndroidIcon style={{ height: "30px" }} />}Google Play
                </Typography>
              </Box>
            </Button>

            {/* App Store Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                width: "10rem",
                height: "50px",
                color: "#fff",
                px: 3,
                py: 3.5,
                borderRadius: "12px",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    gap: 1,
                  }}
                >
                  {<AppleIcon style={{ height: "30px" }} />} App Store
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
       <Box
        sx={{
          width: "100%",
          backgroundColor: "#1B3C74",
          display: "flex",
          justifyContent: "center",
          py: 4,
           position: "relative",
            zIndex:"1",
        }}
      >
        <Box
          component="img"
          src={image3}
          alt="footer"
          sx={{
            width: { xs: "80%", md: "60%" },
           
          }}
        />
      </Box>
    </>
  );
}
