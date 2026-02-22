import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import image from "../assets/questions.png";

export default function Questions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(to bottom, #f8fbff, #ffffff)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          align="center"
          sx={{
            color: "#2aa7ff",
            fontWeight: 600,
            fontSize: { xs: 14, sm: 16 },
            mb: 1,
          }}
        >
          Get Your Answer
        </Typography>

        <Typography
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 24, sm: 30, md: 36 },
            mb: { xs: 4, md: 6 },
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* Main Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* Image Section */}
          <Box
            component="img"
            src={image}
            alt="FAQ"
            sx={{
              width: { xs: "100%", sm: "80%", md: "45%" },
              borderRadius: "20px",
              boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
            }}
          />

          {/* Accordion Section */}
          <Box sx={{ width: { xs: "100%", md: "55%" } }}>
            {[
              {
                question: "How do I book an appointment?",
                answer:
                  "You can easily book an appointment through our website by selecting your preferred doctor and available time slot.",
              },
              {
                question: "Do you provide online consultation?",
                answer:
                  "Yes, we provide secure online video consultations with certified medical specialists.",
              },
              {
                question: "What payment methods are accepted?",
                answer:
                  "We accept UPI, debit/credit cards, net banking and selected digital wallets.",
              },
            ].map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  mb: 2,
                  borderRadius: "16px !important",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === index ? (
                      <RemoveIcon sx={{ color: "#2aa7ff" }} />
                    ) : (
                      <AddIcon sx={{ color: "#2aa7ff" }} />
                    )
                  }
                  sx={{
                    px: 3,
                    py: 1.5,
                  }}
                >
                  <Typography fontWeight={600}>
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography color="text.secondary">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}