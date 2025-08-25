import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

function Header() {
  const dropdowns = [
    {
      label: "Customers",
      items: ["Add Customer", "View Customers", "Customer Groups"]
    },
    {
      label: "Sales Orders",
      items: ["New Sales Order", "Sales Order List"]
    },
    {
      label: "Contracts",
      items: ["New Contract", "Contract List"]
    },
    {
      label: "Quotations",
      items: ["Create Quotation", "Quotations List"]
    },
    {
      label: "Customer Contact",
      items: ["Add Contact", "Contact List", "Address Book"]
    },
    {
      label: "Invoices",
      items: ["New Invoice", "Invoices List"]
    },
    {
      label: "Settings",
      items: ["Preferences", "User Management"]
    }
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [openIdx, setOpenIdx] = useState(null);

  const handleClick = (event, idx) => {
    setAnchorEl(event.currentTarget);
    setOpenIdx(idx);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenIdx(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        px: 3,
        bgcolor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
      }}
    >
      {/* Left section: logo and hamburger menu */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img src="/logo.png" alt="Logo" style={{ width: 40, height: 40 }} />
        <Box sx={{ cursor: "pointer", fontSize: 24, lineHeight: 1 }}>
          ☰
        </Box>

        {/* Dropdown buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {dropdowns.map((dropdown, idx) => (
            <React.Fragment key={dropdown.label}>
              <Button
                variant="text"
                sx={{
                  color: "#23457d",
                  fontWeight: 500,
                  fontSize: 15,
                  textTransform: "none",
                  px: 2,
                  borderRight: idx < dropdowns.length - 1 ? "1px solid #e0e0e0" : "none",
                  borderRadius: 0,
                  bgcolor: "transparent",
                  "&:hover": { bgcolor: "#f0f4fa" }
                }}
                onClick={(e) => handleClick(e, idx)}
                endIcon={<span style={{ fontSize: 14 }}>▾</span>}
              >
                {dropdown.label}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={openIdx === idx}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': `${dropdown.label}-button` }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                {dropdown.items.map((item) => (
                  <MenuItem key={item} onClick={handleClose}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Right section: icons (replace with actual icons as needed) */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <span>🧮</span>
        <span>💡</span>
        <span>⚙️</span>
        <span>📅</span>
        <span>
          🔔
          <Box
            component="span"
            sx={{
              color: "#fff",
              bgcolor: "#e57373",
              borderRadius: "10px",
              fontSize: 12,
              position: "relative",
              top: -8,
              ml: 0.5,
              px: 0.6,
              userSelect: "none",
            }}
          >
            3
          </Box>
        </span>
        <span>🔳</span>
        <span>🌐</span>
      </Box>
    </Box>
  );
}

export default Header;
