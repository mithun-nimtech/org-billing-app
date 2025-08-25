import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookIcon from "@mui/icons-material/Book";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const drawerWidth = 220;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, to: "/" },
  { text: "Zra", icon: <AccountBalanceIcon />, to: "/zra" },
  { text: "Sales", icon: <ShoppingCartIcon />, to: "/sales" },
  { text: "Purchases", icon: <LocalMallIcon />, to: "/purchases" },
  { text: "Products", icon: <AssignmentIcon />, to: "/products" },
  { text: "Warehouses", icon: <WarehouseIcon />, to: "/warehouses" },
  { text: "Projects", icon: <ListAltIcon />, to: "/projects" },
  { text: "Banking", icon: <AccountBalanceWalletIcon />, to: "/banking" },
  { text: "Loans", icon: <MonetizationOnIcon />, to: "/loans" },
  { text: "Users", icon: <PeopleIcon />, to: "/users" },
  { text: "Payroll", icon: <ReceiptIcon />, to: "/payroll" },
  { text: "Expenses", icon: <ExpandMoreIcon />, to: "/expenses" },
  { text: "Budget", icon: <ReceiptIcon />, to: "/budget" },
  { text: "Fixed Asset", icon: <BookIcon />, to: "/fixedasset" },
  { text: "General Ledger", icon: <BookIcon />, to: "/ledger" },
];

const Sidebar = () => (
  <Drawer
    variant="permanent"
    anchor="left"
    PaperProps={{
      sx: {
        width: drawerWidth,
        background: "#f7fbff",
        borderRight: "none",
        marginTop: "64px", // Push below fixed header of 64px height
        height: `calc(100vh - 64px)`, // Fill full height minus header height
      },
    }}
    sx={{ width: drawerWidth, flexShrink: 0 }}
  >
    <List sx={{ paddingTop: 2 }}>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          button
          component={NavLink}
          to={item.to}
          className="sidebar-link"
        >
          <ListItemIcon sx={{ color: "#222" }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
