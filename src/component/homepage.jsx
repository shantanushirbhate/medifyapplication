import React from "react";
import styles from "./homepage.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


import logo from "../assets/medifylogo.png.png";
import heroHeadline from "../assets/tag_heroheadling.png";
import heroMaskGroupImg from "../assets/Mask Group (1).png";
import img1 from "../assets/Ambulance.png";
import img2 from "../assets/Capsule.png";
import img3 from "../assets/Doctor.png";
import img4 from "../assets/Drugstore.png";
import img5 from "../assets/Hospital.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Swiperoffer from "./swiperoffer";
import Find from "./find";
import Medicalspecilist from "./medicalspecilistswiper";
import PatientCaring from "./paitentcaring";
import LatestNes from "./latestnews";
import OurFamilyes from "./ourfamilys";
import Questions from "./questions";

const drawerWidth = 200;

const navItems = [
  "Find Doctors",
  "Hospitals",
  "Medicine",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

const Images = [
  { id: 1, src: img1, title: "Ambulance" },
  { id: 2, src: img2, title: "Capsule" },
  { id: 3, src: img3, title: "Doctor" },
  { id: 4, src: img4, title: "Drugstore" },
  { id: 5, src: img5, title: "Hospital" },
];

/* =======================
   Top Banner
======================= */
const TopBanner = () => (
  <p className={styles.bluebackgroundheading}>
    The health and well-being of our patients and their health care team will
    always be our priority, so we follow the best practices for cleanliness.
  </p>
);

/* =======================
   Mobile Drawer Content
======================= */
const MobileDrawerContent = ({ onClose }) => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      color: "#fff",
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
      <IconButton onClick={onClose} sx={{ color: "#fff" }}>
        <CloseIcon />
      </IconButton>
    </Box>

    <List sx={{ flexGrow: 1 }}>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Box sx={{ p: 2 }}>
      <Button variant="contained" fullWidth>
        My Booking
      </Button>
    </Box>
  </Box>
);

/* =======================
   Navigation Bar
======================= */
const NavigationBar = ({ isMobile, onMenuClick }) => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: "#E7F0FF",
      color: "#000",
      boxShadow: "none",
    }}
  >
    <Toolbar>
      <Box
        component={Link}
        to="/"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img src={logo} alt="Medify Logo" style={{ height: 32 }} />
      </Box>

      {!isMobile && (
        <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#000", textTransform: "none" }}>
              {item}
            </Button>
          ))}
          <Button variant="contained" sx={{ ml: 2 }}>
            My Booking
          </Button>
        </Box>
      )}

      {isMobile && (
        <IconButton edge="end" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
      )}
    </Toolbar>
  </AppBar>
);

const HeroSection = () => (
  <>
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#E7F0FF",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 31 },
        py: { xs: 2, md: 0 },
        gap: { xs: 2, md: 6 },
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* LEFT SECTION */}
      <Box
        sx={{
          flex: 1,
          minWidth: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          gap: 3,
          marginLeft: { xs: "20px", md: "15%" },
          height: { md: "450px" },
        }}
      >
        {/* HERO HEADING */}
        <img
          src={heroHeadline}
          alt="Medify Headline"
          style={{
            width: "100%",
            maxWidth: "560px",
          }}
        />

        {/* FIND CENTERS BUTTON */}
        <Button
          sx={{ marginLeft: { xs: "-175px", sm: "100px", md: "-2px" } }}
          variant="contained"
          size="small"
        >
          Find Centers
        </Button>
      </Box>

      {/* RIGHT SECTION */}
      <Box
        sx={{
          flex: 1,
          minWidth: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={heroMaskGroupImg}
          alt="Medify Doctors"
          style={{
            width: "100%",
            maxWidth: "520px",
            height: "auto",
          }}
        />
      </Box>
      {/* search city state box container */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-260px", sm: "-200px", md: "-140px" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "95%", sm: "85%", md: "65%" },
          backgroundColor: "#FFFFFF",
          boxShadow: 3,
          borderRadius: 3,
          p: { xs: 2, sm: 3, md: 4 },
          zIndex: 1,
        }}
      >
        {/* Search Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 3,
          }}
        >
          <input
            placeholder="Search State"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            placeholder="Search City"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Search
          </Button>
        </Box>

        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            You May Be Looking For
          </Typography>
        </Box>

        {/* Image Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
          }}
        >
          {Images.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: {
                  xs: "14%", // 2 per row mobile
                  sm: "28%", // 3 per row tablet
                  md: "15%", // 5 per row desktop
                },
                textAlign: "center",
                p: { xs: 1.6, sm: 2 },
                borderRadius: 2,
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 3,
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={item.title}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "60px",
                    md: "80px",
                  },
                  height: "auto",
                  mb: 1,
                }}
              />
              <Typography variant="body2">{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </>
);

/* =======================
   Home Component
======================= */
function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMobile = useMediaQuery("(max-width:861px)");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />

      <TopBanner />

      <NavigationBar isMobile={isMobile} onMenuClick={handleDrawerToggle} />

      {/* Headline BELOW AppBar */}
      <HeroSection />

      <Drawer
        anchor="right"
        container={container}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: isMobile ? "block" : "none",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#1B3C74",
          },
        }}
      >
        <MobileDrawerContent onClose={handleDrawerToggle} />
      </Drawer>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 10, md: 4 },
        }}
      >
        <Swiperoffer />
      </Box>
      <Find />
      <Medicalspecilist />
      <PatientCaring />
      <LatestNes />
      <OurFamilyes />
      <Questions/>
    </>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
