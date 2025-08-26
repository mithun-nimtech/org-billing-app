import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Paper,
  Avatar,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ListIcon from "@mui/icons-material/List";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";

const Purchases = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const payableActions = [
    { label: "Create Purchase Order", icon: <AddCircleOutlineIcon color="primary" fontSize="large" /> },
    { label: "Purchase Order List", icon: <ShoppingCartIcon color="error" fontSize="large" /> },
    { label: "Create Purchase Invoice", icon: <AddCircleOutlineIcon color="secondary" fontSize="large" /> },
    { label: "Purchase Invoice List", icon: <ListIcon color="success" fontSize="large" /> },
    { label: "Create Vendor", icon: <PersonAddIcon color="action" fontSize="large" /> },
    { label: "Vendor List", icon: <Avatar sx={{ bgcolor: "#1565c0" }}>V</Avatar> },
  ];

  const reportsActions = [
    { label: "List Invoices", icon: <ListAltIcon color="primary" /> },
    { label: "Aging Summary", icon: <AssessmentIcon color="info" /> },
    { label: "Aging Details", icon: <AssessmentIcon color="warning" /> },
    { label: "Credit Note Aging Report", icon: <CreditScoreIcon color="secondary" /> },
    { label: "ASYCUDA List", icon: <DonutLargeIcon color="success" /> },
    { label: "Automate Purchase List", icon: <DonutLargeIcon color="primary" /> },
  ];

  return (
    <Box sx={{ p: isMobile ? 2 : 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Supplier Billing Area
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="purchases tabs"
        sx={{ mb: 3 }}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons="auto"
      >
        <Tab label="Payable Area" />
        <Tab label="Reports" />
        <Tab label="Dashboard" />
      </Tabs>

      {tabIndex === 0 && (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            Payable Area
          </Typography>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            {payableActions.map(({ label, icon }) => (
              <Grid item xs={6} sm={4} md={2} key={label} sx={{ textAlign: "center" }}>
                {icon}
                <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            Settings
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Avatar sx={{ mr: 2, bgcolor: "#1976d2" }}>V</Avatar>
            <Typography>Vendors tags/categories</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                  Statistics - Vendor Invoice
                </Typography>
                {/* Placeholder for chart, replace with your chart component */}
                <DonutLargeIcon sx={{ fontSize: 120, color: "primary.light" }} />
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Box sx={{ mx: 1, color: "#e3f2fd" }}>■ Draft</Box>
                  <Box sx={{ mx: 1, color: "#81d4fa" }}>■ Starter</Box>
                  <Box sx={{ mx: 1, color: "#1976d2" }}>■ Paid</Box>
                  <Box sx={{ mx: 1, color: "#6a1b9a" }}>■ Closed</Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={7}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                  Total
                </Typography>
                {/* Example total progress bar */}
                <Box sx={{ bgcolor: "#e3f2fd", borderRadius: 2, p: 1 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 18,
                      bgcolor: "#bbdefb",
                      borderRadius: 1,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "85%",
                        height: "100%",
                        bgcolor: "#1976d2",
                      }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ pt: 1, fontWeight: 500 }}>
                    85%
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}

      {tabIndex === 1 && (
        <Box>
          <Typography>Reports content goes here</Typography>
          {/* Add your reports UI */}
        </Box>
      )}

      {tabIndex === 2 && (
        <Box>
          <Typography>Dashboard content goes here</Typography>
          {/* Add your dashboard UI */}
        </Box>
      )}
    </Box>
  );
};

export default Purchases;
