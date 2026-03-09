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
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DownloadApp from "../dowenloadapp";
import Hospitalimage from "../../assets/secondpage/hospital.png";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

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
} from "@mui/material";
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
const MobileDrawerContent = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <>
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
            onClick={() => navigate("/my-bookings")}
          >
            My Booking
          </Button>
        </Box>
      </Box>
    </>
  );
};

/* ======================= Navigation Bar ======================= */
const NavigationBar = ({ isMobile, onMenuClick }) => {
  const navigate = useNavigate();
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
                <Button
                  key={item}
                  sx={{ color: "#000", textTransform: "none" }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{ ml: 2 }}
                onClick={() => navigate("/my-bookings")}
              >
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
  );
};

const SearchListContainer = ({
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  states,
  cities,
  onSearch,
}) => {
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
            marginBottom: { xs: "34rem", sm: "50rem", md: "39rem" },
            position: "relative",
            bottom: { xs: "-26px", sm: "-14px", md: "-14px" },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "85%", sm: "85%", md: "65%" },
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
              id="searchBtn"
               type="submit"
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
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [selectedHospital, setSelectedHospital] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const handleBooking = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDateClick = (index) => {
    setSelectedDateIndex(index);
  };
  const handleConfirmBooking = () => {
    const booking = {
       hospitalName: selectedHospital.name,
    city: selectedHospital.city,
      date: days[selectedDateIndex],
      slot: selectedSlot,
      email: email,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    setOpenModal(false);
    setEmail("");
    setSelectedSlot(null);
    setSelectedHospital(null);
     navigate("/my-bookings"); 
  };

  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const days = getNext7Days();

  const slotData = {
    0: {
      morning: [
        { time: "10:00 AM", available: true },
        { time: "10:30 AM", available: false },
      ],
      afternoon: [
        { time: "1:00 PM", available: true },
        { time: "1:30 PM", available: true },
      ],
      evening: [
        { time: "7:00 PM", available: false },
        { time: "7:30 PM", available: true },
      ],
    },

    1: {
      morning: [
        { time: "9:00 AM", available: true },
        { time: "9:30 AM", available: true },
      ],
      afternoon: [
        { time: "12:30 PM", available: false },
        { time: "1:30 PM", available: true },
      ],
      evening: [
        { time: "6:30 PM", available: true },
        { time: "7:00 PM", available: true },
      ],
    },
  };
  //   const defaultSlots = {
  //   morning: [
  //     { time: "10:00 AM", available: true },
  //     { time: "10:30 AM", available: true },
  //   ],
  //   afternoon: [
  //     { time: "1:00 PM", available: true },
  //     { time: "1:30 PM", available: true },
  //   ],
  //   evening: [
  //     { time: "7:00 PM", available: true },
  //     { time: "7:30 PM", available: true },
  //   ],
  //   };

  // for (let i = 0; i < 7; i++) {
  //   slotData[i] = defaultSlots;
  // }

  const selectedDaySlots = slotData[selectedDateIndex] || {
    morning: [],
    afternoon: [],
    evening: [],
  };
  const totalAvailableSlots =
    selectedDaySlots.morning.filter((s) => s.available).length +
    selectedDaySlots.afternoon.filter((s) => s.available).length +
    selectedDaySlots.evening.filter((s) => s.available).length;

  const isSlotAvailable = totalAvailableSlots > 0;

  return (
    <Box sx={{ mt: { xs: "250px", sm: "150px", md: "100px" } }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                {/* Hospital Image */}
                <Box
                  component="img"
                  src={Hospitalimage}
                  alt="Hospital"
                  sx={{
                    height: "120px",
                    width: "120px",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />

                {/* Hospital Details */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {hospital.name}
                  </Typography>

                  <Typography>{hospital.address}</Typography>

                  <Typography>
                    {hospital.city}, {hospital.state} - {hospital.zip}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    Rating: {hospital.rating || "Not Available"}
                  </Typography>
                </Box>

                {/* Booking Section */}
                <Box sx={{ ml: { xs: "5rem" } }}>
                  <Typography
                    color={isSlotAvailable ? "green" : "red"}
                    sx={{ fontSize: "1rem", mb: 1 }}
                  >
                    {isSlotAvailable
                      ? `${totalAvailableSlots} Slots Available`
                      : "No Slots Available"}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleBooking(index)}
                  >
                    Book FREE Center Visit
                  </Button>
                </Box>
              </Box>

              {/* Booking Dropdown */}

              {openIndex === index && (
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ position: "relative", mt: 2 }}>
                    {/* Left Arrow */}
                    <Button
                      className={`prev-btn-${index}`}
                      sx={{
                        position: "absolute",
                        left: "-40px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        minWidth: "30px",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    >
                      <ArrowBackIosNewIcon fontSize="small" />
                    </Button>

                    {/* Right Arrow */}
                    <Button
                      className={`next-btn-${index}`}
                      sx={{
                        position: "absolute",
                        right: "-40px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        minWidth: "30px",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </Button>

                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        prevEl: `.prev-btn-${index}`,
                        nextEl: `.next-btn-${index}`,
                      }}
                      breakpoints={{
                        0: { slidesPerView: 2.2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                      }}
                      spaceBetween={10}
                    >
                      {days.map((date, i) => {
                        {
                          /* const isToday = i === 0; */
                        }
                        const daySlots = slotData[i] || {
                          morning: [],
                          afternoon: [],
                          evening: [],
                        };

                        const totalSlots =
                          daySlots.morning.filter((s) => s.available).length +
                          daySlots.afternoon.filter((s) => s.available).length +
                          daySlots.evening.filter((s) => s.available).length;

                        return (
                          <SwiperSlide key={i}>
                            <Box
                              onClick={() => handleDateClick(i)}
                              sx={{
                                border:
                                  selectedDateIndex === i
                                    ? "2px solid #1976d2"
                                    : "1px solid #ccc",
                                borderRadius: "8px",
                                p: 1,
                                textAlign: "center",
                                cursor: "pointer",
                              }}
                            >
                              {/* <p>
  {i === 0
    ? `Today, ${date.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      })}`
    : i === 1
    ? `Tomorrow, ${date.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      })}`
    : date.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
</p> */}
                              <Box textAlign="center">
                                <Typography fontWeight="bold">
                                  {i === 0
                                    ? "Today"
                                    : i === 1
                                      ? "Tomorrow"
                                      : date.toLocaleDateString("en-IN", {
                                          weekday: "long",
                                        })}
                                </Typography>

                                <Typography fontSize="12px">
                                  {date.toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  })}
                                </Typography>
                              </Box>

                              <p style={{ color: "green", fontSize: "12px" }}>
                                {totalSlots} Slots Available
                              </p>
                            </Box>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </Box>

                  {/* Slots */}
                  {selectedDateIndex !== null && (
                    <Box mt={3}>
                      <p>Morning</p>
                      {selectedDaySlots.morning.map((slot, i) => (
                        <Button
                          key={`morning-${i}`}
                          disabled={!slot.available}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: !slot.available
                              ? "#ddd"
                              : selectedSlot === slot.time
                                ? "#1976d2"
                                : "#f5f5f5",
                            color: !slot.available
                              ? "#999"
                              : selectedSlot === slot.time
                                ? "white"
                                : "black",
                          }}
                          onClick={() => {
      if (slot.available) {
        setSelectedSlot(slot.time);
        setSelectedHospital(hospital);
        setOpenModal(true);
      }
    }}
                        >
                          {slot.time}
                        </Button>
                      ))}

                      <p>Afternoon</p>
                      {selectedDaySlots.afternoon.map((slot, i) => (
                        <Button
                          key={`afternoon-${i}`}
                          disabled={!slot.available}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor:
                              selectedSlot === slot.time
                                ? "#1976d2"
                                : "#f5f5f5",
                            color:
                              selectedSlot === slot.time ? "white" : "black",
                            "&:hover": {
                              backgroundColor:
                                selectedSlot === slot ? "#1976d2" : "#e0e0e0",
                            },
                          }}
                          onClick={() => {
      if (slot.available) {
        setSelectedSlot(slot.time);
        setSelectedHospital(hospital);
        setOpenModal(true);
      }
    }}
                        >
                          {slot.time}
                        </Button>
                      ))}

                      <p>Evening</p>
                      {selectedDaySlots.evening.map((slot, i) => (
                        <Button
                          key={`evening-${i}`}
                          disabled={!slot.available}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: !slot.available
                              ? "#ddd"
                              : selectedSlot === slot.time
                                ? "#1976d2"
                                : "#f5f5f5",
                            color: !slot.available
                              ? "#999"
                              : selectedSlot === slot.time
                                ? "white"
                                : "black",
                          }}
                         onClick={() => {
      if (slot.available) {
        setSelectedSlot(slot.time);
        setSelectedHospital(hospital);
        setOpenModal(true);
      }
    }}
                        >
                          {slot.time}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
       <Dialog open={openModal} onClose={() => setOpenModal(false)}>
      <DialogTitle>Confirm Booking</DialogTitle>

        <DialogContent>
                    <Typography variant="h6" component="h3">
Hospital: {selectedHospital?.name}
</Typography>

<Typography>
Date: {days[selectedDateIndex]?.toLocaleDateString()}
</Typography>

<Typography>
Slot: {selectedSlot}
</Typography>
        <TextField
          fullWidth
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 2 }}
          />

      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpenModal(false)}>Cancel</Button>

        <Button
          variant="contained"
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>

    </Box>
  );
};

/* ======================= Main Component ======================= */
export default function SearchListPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const [selectedState, SetSelectedState] = useState(
    location.state?.selectedState || "",
  );

  const [selectedCity, SetSelectedCity] = useState(
    location.state?.selectedCity || "",
  );

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medical, setMedical] = useState([]);

  /* ================= FETCH HOSPITALS ================= */

  const fetchMedicalCenter = async () => {
    if (!selectedState || !selectedCity) return;

    try {
      const response = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
      );

      const hospitals = response.data.map((item) => ({
        name: item["Hospital Name"],
        address: item["Address"],
        city: item["City"],
        zip: item["ZIP Code"],
        state: item["State"],
        rating: item["Hospital overall rating"],
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

  /* FETCH STATES */

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states",
        );

        setStates(response.data);
      } catch (error) {
        console.log("Error fetching states", error);
      }
    };

    fetchStates();
  }, []);

  /* FETCH CITIES */

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`,
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
      <DownloadApp />
    </>
  );
}

SearchListPage.propTypes = {
  window: PropTypes.func,
};
