import React, { useState, useEffect } from "react";
import styles from "../secondpage/secondpage.module.css";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem } from "@mui/material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../assets/medifylogo.png.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";

import { Card, CardMedia, CardContent, CardActions ,Typography} from "@mui/material";
import axios from "axios";


const drawerWidth = 200;

const navItems = [
  "Find Doctors",
  "Hospitals",
  "Medicine",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

/* ======================= Top Banner ======================= */
const TopBanner = () => (
  <p className={styles.bluebackgroundheading}>
    The health and well-being of our patients and their health care team will
    always be our priority, so we follow the best practices for cleanliness.
  </p>
);

/* ======================= Mobile Drawer ======================= */
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

/* ======================= Navigation Bar ======================= */
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
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
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

const SearchListContainer = (
  {
    selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  states,
    cities,
  onSearch
}

) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "0 0 1rem 1rem",
          height: "5rem",
          width: "100%",
          background:
            " linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
        }}
      >
        <Box
          sx={{
          marginBottom: {xs:"34rem", sm:"40rem", md:"39rem" } ,
            position: "absolute",
            bottom: { xs: "-260px", sm: "-200px", md: "-140px" },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "95%", sm: "85%", md: "65%" },
            backgroundColor: "#FFFFFF",
            boxShadow: 3,
            borderRadius: 3,
            p: { xs: 2, sm: 3, md: 2 },
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <Box id="state">
              <FormControl fullWidth>
            <Select
  value={selectedState}
  onChange={(e) => setSelectedState(e.target.value)}
  displayEmpty
>
  <MenuItem value="">
    <em>Select State</em>
  </MenuItem>

  {states.map((item, index) => (
    <MenuItem key={index} value={item}>
      {item}
    </MenuItem>
  ))}
</Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth>
              <Select
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
>
  <MenuItem value="">Select City</MenuItem>

  {cities.map((item, index) => (
    <MenuItem key={index} value={item}>
      {item}
    </MenuItem>
  ))}
</Select>
              </FormControl>
            </Box>

            <Button
              variant="contained"
              onClick={onSearch}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <SearchOutlinedIcon />
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};


const HospitalListCard = ({ selectedState, selectedCity, medical }) => {

  return (
    <Box mt={30} px={3}>

      <Typography variant="h5" fontWeight="bold">
        {medical.length} Medical Centers Available in {selectedCity}
      </Typography>

      <Typography sx={{ mb: 3 }}>
        <VerifiedRoundedIcon sx={{ mr: 1 }} />
        Book appointments with minimum wait-time & verified doctor details
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>

        {medical.map((hospital, index) => (

          <Card key={index} sx={{ p: 2 }}>

            <CardContent>

              <Typography variant="h6" fontWeight="bold">
                {hospital.name}
              </Typography>

              <Typography>
                {hospital.address}
              </Typography>

              <Typography>
                {hospital.city}, {hospital.state} - {hospital.zip}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Rating: {hospital.rating || "Not Available"}
              </Typography>

              <Button variant="contained" sx={{ mt: 2 }}>
                Book FREE Center Visit
              </Button>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Box>
  );
};



/* ======================= Main Component ======================= */
export default function SearchListPage(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const [selectedState, SetSelectedState] = useState(
    location.state?.selectedState || ""
  );

  const [selectedCity, SetSelectedCity] = useState(
    location.state?.selectedCity || ""
  );

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medical, setMedical] = useState([]);

  /* ================= FETCH HOSPITALS ================= */

  const fetchMedicalCenter = async () => {

    if (!selectedState || !selectedCity) return;

    try {

      const response = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );

      const hospitals = response.data.map((item) => ({
        name: item["Hospital Name"],
        address: item["Address"],
        city: item["City"],
        zip: item["ZIP Code"],
        state: item["State"],
        rating: item["Hospital overall rating"]
      }));

      setMedical(hospitals);

    } catch (error) {
      console.log("error in fetching the medical center:", error);
    }

  };

  /* ================= FIRST LOAD DATA ================= */

  useEffect(() => {
    if (selectedState && selectedCity) {
      fetchMedicalCenter();
    }
  }, []);

  /* ================= FETCH STATES ================= */

  useEffect(() => {

    const fetchStates = async () => {

      try {

        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );

        setStates(response.data);

      } catch (error) {
        console.log("Error fetching states", error);
      }

    };

    fetchStates();

  }, []);

  /* ================= FETCH CITIES ================= */

  useEffect(() => {

    const fetchCities = async () => {

      try {

        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );

        setCities(response.data);

      } catch (error) {
        console.log("Error fetching cities", error);
      }

    };

    if (selectedState) {
      fetchCities();
    }

  }, [selectedState]);

  /* ================= MOBILE MENU ================= */

  const isMobile = useMediaQuery("(max-width:861px)");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  /* ================= RETURN ================= */

  return (

    <>

      <TopBanner />

      <NavigationBar
        isMobile={isMobile}
        onMenuClick={handleDrawerToggle}
      />

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

      <SearchListContainer
        selectedState={selectedState}
        setSelectedState={SetSelectedState}
        selectedCity={selectedCity}
        setSelectedCity={SetSelectedCity}
        states={states}
        cities={cities}
        onSearch={fetchMedicalCenter}
      />

      <HospitalListCard
        selectedState={selectedState}
        selectedCity={selectedCity}
        medical={medical}
      />

    </>

  );

}

SearchListPage.propTypes = {
  window: PropTypes.func,
};
