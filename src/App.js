import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Sales from "./pages/Sales";
import QuickSale from "./pages/QuickSale"; // Import the new QuickSale page
import Purchases from "./pages/Purchases";
import NewInvoice from "./pages/NewInvoice";
import NewSalesOrder from "./pages/NewSalesOrder";
import { Box, Toolbar } from "@mui/material";

const drawerWidth = 220;
const HEADER_HEIGHT = 64;
const Home = () => <h2>Dashboard Home</h2>;
const Zra = () => <h2>Zra Page</h2>;
// const Purchases = () => <h2>Purchases Page</h2>;
const Products = () => <h2>Products Page</h2>;
const Warehouses = () => <h2>Warehouses Page</h2>;
const Projects = () => <h2>Projects Page</h2>;
const Banking = () => <h2>Banking Page</h2>;
const Loans = () => <h2>Loans Page</h2>;
const Users = () => <h2>Users Page</h2>;
const Payroll = () => <h2>Payroll Page</h2>;
const Expenses = () => <h2>Expenses Page</h2>;
const Budget = () => <h2>Budget Page</h2>;
const FixedAsset = () => <h2>Fixed Asset Page</h2>;
const GeneralLedger = () => <h2>General Ledger Page</h2>;

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Sidebar
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              marginTop: `${HEADER_HEIGHT}px`,
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
              position: "fixed",
              top: HEADER_HEIGHT,
              left: 0,
              overflowY: "auto",
              bgcolor: "background.paper",
            }}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              marginLeft: `${drawerWidth}px`,
              marginTop: `${HEADER_HEIGHT}px`,
              padding: 3,
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
              overflowY: "auto",
            }}
          >
            <Toolbar /> {/* Space for fixed header */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/quick-sale" element={<QuickSale />} /> {/* New route */}
              <Route path="/sales/create-detailed-invoice" element={<NewInvoice />} />
              <Route path="/sales/create-sales-order" element={<NewSalesOrder />} />
              <Route path="/zra" element={<Zra />} />
              <Route path="/purchases" element={<Purchases />} />
              <Route path="/products" element={<Products />} />
              <Route path="/warehouses" element={<Warehouses />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/banking" element={<Banking />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/users" element={<Users />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/fixedasset" element={<FixedAsset />} />
              <Route path="/ledger" element={<GeneralLedger />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
