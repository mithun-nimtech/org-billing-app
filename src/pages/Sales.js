import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Tabs, Tab, Grid, Paper, Radio } from "@mui/material";

const SIDEBAR_WIDTH = 220;
const HEADER_HEIGHT = 64;

const getIcon = (src) => (
  <img src={src} alt="" style={{ width: 48, height: 48, margin: "0 auto 8px", display: "block" }} />
);

const salesActions = [
  { label: "Create Quick Sales", icon: getIcon("https://img.icons8.com/color/48/box.png") },
  { label: "Createeee Detailed Invoice", icon: getIcon("https://img.icons8.com/color/48/table.png") },
  { label: "Invoices List", icon: getIcon("https://img.icons8.com/color/48/list.png") },
  { label: "Create Sales Order", icon: getIcon("https://img.icons8.com/color/48/order-history.png") },
  { label: "Sales Order List", icon: getIcon("https://img.icons8.com/color/48/bill.png") },
  { label: "Customers invoices", icon: getIcon("https://img.icons8.com/color/48/customer-insights.png") },
  { label: "Create Prospects", icon: getIcon("https://img.icons8.com/color/48/add-user-group-man-man.png") },
  { label: "Prospects List", icon: getIcon("https://img.icons8.com/color/48/conference.png") },
  { label: "New Contract", icon: getIcon("https://img.icons8.com/color/48/contract.png") },
  { label: "List of contracts", icon: getIcon("https://img.icons8.com/color/48/agreement.png") },
  { label: "Create Contact", icon: getIcon("https://img.icons8.com/color/48/add-contact-to-company.png") },
  { label: "List of contacts /address", icon: getIcon("https://img.icons8.com/color/48/address-book.png") },
  { label: "Create Customer", icon: getIcon("https://img.icons8.com/color/48/add-male-user.png") },
  { label: "Customer Details", icon: getIcon("https://img.icons8.com/color/48/user-male-info.png") },
  { label: "Template invoice", icon: getIcon("https://img.icons8.com/color/48/template.png") },
  { label: "Payments received from customers", icon: getIcon("https://img.icons8.com/color/48/money-transfer.png") },
  { label: "Create Proposal", icon: getIcon("https://img.icons8.com/color/48/add-file.png") },
  { label: "Proposals", icon: getIcon("https://img.icons8.com/color/48/documents.png") },
];

const settingsActions = [
  { label: "Product Accounting", icon: getIcon("https://img.icons8.com/color/48/accounting.png") },
  { label: "Vat accounts", icon: getIcon("https://img.icons8.com/color/48/tax.png") },
  { label: "Customers tags /categories", icon: getIcon("https://img.icons8.com/color/48/user-group-man-man.png") },
  { label: "Contacts tags /categories", icon: getIcon("https://img.icons8.com/color/48/new-contact.png") },
  { label: "Generate Barcode", icon: getIcon("https://img.icons8.com/color/48/barcode.png") },
];

const reportsList = [
  "Create Quick Sales",
  "Create Sales Order Details",
  "Customer Reports",
  "Unpaid Customer List",
  "Aging Summary",
  "Aging Details",
  "Credit Note Aging Report",
  "Reporting",
  "Refund History",
  "Recurring Invoice Details",
  "Profit Per Product",
  "Turnover Collected, By Sale Tax",
  "Credit Note Aging Report",
  "Payments Received",
  "Credit Note List",
  "Turnover invoiced, By product and service"
];

function Sales() {
  const [tabIdx, setTabIdx] = useState(0);
  const [selectedReport, setSelectedReport] = useState(null);
  const navigate = useNavigate();

  const getReportRows = (reports, cols = 4) => {
    const rows = [];
    const perRow = Math.ceil(reports.length / cols);
    for (let i = 0; i < perRow; i++) {
      rows.push(reports.slice(i * cols, (i + 1) * cols));
    }
    return rows;
  };

  const reportRows = getReportRows(reportsList, 4);

  return (
    <Box
      sx={{
        position: "absolute",
        top: `${HEADER_HEIGHT}px`,
        left: `${SIDEBAR_WIDTH}px`,
        right: 0,
        bottom: 0,
        width: `calc(100vw - ${SIDEBAR_WIDTH}px)`,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        boxSizing: "border-box",
        background: "#fff",
        px: 4,
        py: 3,
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#2272e0", mb: 2 }}>
        Customer Billing Area
      </Typography>
      <Tabs
        value={tabIdx}
        sx={{
          mb: 3,
          ".MuiTabs-flexContainer": { gap: 2 },
          ".MuiTab-root": {
            textTransform: "none",
            borderRadius: "24px",
            minWidth: 112,
            background: "#F4F7FC",
            fontWeight: 600,
            color: "#2272e0",
            "&.Mui-selected": {
              background: "#2272e0",
              color: "#fff",
            },
          },
        }}
        TabIndicatorProps={{ style: { display: "none" } }}
        onChange={(e, idx) => setTabIdx(idx)}
      >
        <Tab label="Sales" />
        <Tab label="Reports" />
        <Tab label="Dashboard" />
      </Tabs>

      {tabIdx === 0 && (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Sales
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {salesActions.map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <Paper
                  elevation={0}
                  sx={{
                    textAlign: "center",
                    p: 2,
                    borderRadius: "14px",
                    background: "#F4F7FC",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                  }}
                  onClick={() => {
                    if (item.label === "Create Quick Sales") {
                      navigate("/sales/quick-sale");
                    }
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 14 }}>
                    {item.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Settings
          </Typography>
          <Grid container spacing={2}>
            {settingsActions.map((item, idx) => (
              <Grid key={idx} item xs={6} sm={4} md={2.4}>
                <Paper
                  elevation={0}
                  sx={{
                    textAlign: "center",
                    p: 2,
                    borderRadius: "14px",
                    background: "#F4F7FC",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 14 }}>
                    {item.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {tabIdx === 1 && (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3 }}>
            Reports
          </Typography>
          <Box sx={{ width: "100%", maxWidth: 1000 }}>
            {reportRows.map((row, rowIdx) => (
              <Box
                key={`report-row-${rowIdx}`}
                sx={{
                  display: "flex",
                  width: "100%",
                  mb: 2,
                  gap: 4,
                }}
              >
                {row.map((label, colIdx) => (
                  <Box
                    key={label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Radio
                      checked={selectedReport === label}
                      onChange={() => setSelectedReport(label)}
                      value={label}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: "normal",
                        fontSize: 15,
                        fontWeight: 400,
                        lineHeight: 1.3,
                        overflowWrap: "anywhere"
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Dashboard tab can be added here */}
    </Box>
  );
}

export default Sales;
