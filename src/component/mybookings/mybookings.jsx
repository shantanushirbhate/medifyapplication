import React, {  useState } from "react";
import PropTypes from "prop-types";
// import { FormControl, Select, MenuItem, Card, CardContent } from "@mui/material";
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
// import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DownloadApp from "../dowenloadapp";
import Hospitalimage from "../../assets/secondpage/hospital.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/navigation";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  TextField
} from "@mui/material";
// import axios from "axios";
import styles from "./mybookings.module.css"




const navItems = [
  "Find Doctors",
  "Hospitals",
  "Medicine",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];


const drawerWidth = 200;

const TopBanner = () => (
  <p className={styles.bluebackgroundheading}>
    The health and well-being of our patients and their health care team will
    always be our priority, so we follow the best practices for cleanliness.
  </p>
);

const MobileDrawerContent = ({ onClose }) => {
   const navigate = useNavigate();

  return (<>
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
 <Button
  variant="contained"
          fullWidth
          onClick={ ()=> (navigate("/my-bookings"))}
>
  My Booking
</Button> 
</Box>
  </Box>
  </>)

};
const NavigationBar = ({ isMobile, onMenuClick }) => {
  // const navigate = useNavigate()
    return (
      <>
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
          <Button variant="contained" sx={{ ml: 2 }} >
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
      </>
    )
 
};

const SearchHospital = ({ searchInput, setSearchInput, onSearch }) => {
  return (
    <Box
      sx={{
        borderRadius: "0 0 1rem 1rem",
        width: "100%",
        background:
          "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
       
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#fff",
          fontWeight: 600,
          textAlign: { xs: "center", md: "left" },
          mb: 1
        }}
      >
        My Bookings
      </Typography>

      <Box
        sx={{
          width: { xs: "85%", sm: "90%", md: "70%" },
          mx: "auto",
          backgroundColor: "#fff",
          boxShadow: 3,
          borderRadius: 3,
          p: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2
        }}
      >
        <TextField
          fullWidth
          placeholder="Search by hospital name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Button
          id="searchBtn"
           type="submit"
          variant="contained"
          onClick={onSearch}
          sx={{
            width: { xs: "100%", sm: "auto" }
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

const BookeddHospitalCard = ({ bookings, onDelete }) => {
  return (
    <Box sx={{ p: 2 }}>
      {bookings.length === 0 ? (
        <Typography>No bookings found</Typography>
      ) : (
        bookings.map((booking, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <h variant="h6" component="h3">
                {booking?.hospitalName}
              </h>

              <Typography component="p">
                Date: {booking?.date}
              </Typography>

              <Typography component="p">
                Time Slot: {booking?.slot}
              </Typography>
            </CardContent>

            <CardActions>
              <IconButton onClick={() => onDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  );
};

export default function MyBookings(props) {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  
  //  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  
  const handleSearch = () => {
  setSearch(searchInput);
  };


const [bookings, setBookings] = useState(() => {
  try {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    if (Array.isArray(storedBookings)) {
      return storedBookings;
    }

    return [];
  } catch (error) {
    console.log("Error parsing bookings from localStorage:", error);
    return [];
  }
});

  
const filteredBookings = (bookings || []).filter((booking) => {
  const hospitalName = booking?.hospitalName || "";
  const searchTerm = search || "";

  return hospitalName.toLowerCase().includes(searchTerm.toLowerCase());
});

  const handleDeleteBooking = (indexToDelete) => {

  const updatedBookings = bookings.filter(
    (_, index) => index !== indexToDelete
  );

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );
};


  const isMobile = useMediaQuery("(max-width:861px)");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      
      <TopBanner />
       <NavigationBar isMobile={isMobile} onMenuClick={handleDrawerToggle} />
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
      {/* SEARCH */}
      <SearchHospital  searchInput={searchInput}
  setSearchInput={setSearchInput}
  onSearch={handleSearch}/>

      {/* BOOKING CARDS */}
      <BookeddHospitalCard bookings={filteredBookings}  onDelete={handleDeleteBooking}/>
    
    </>
  )
}