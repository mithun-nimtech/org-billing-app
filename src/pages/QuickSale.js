import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Divider
} from "@mui/material";

function ResponsiveStyledForm() {
  // Form state
  const [customer, setCustomer] = useState("");
  const [refCustomer, setRefCustomer] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [project, setProject] = useState("");
  const [type, setType] = useState("");
  const [incoterm, setIncoterm] = useState("");
  const [docTemplate, setDocTemplate] = useState("");
  const [language, setLanguage] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [bank, setBank] = useState("");
  const [date2, setDate2] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [currency, setCurrency] = useState("");
  const [paymentNote, setPaymentNote] = useState("");
  const [receivedAmount, setReceivedAmount] = useState("");

  // Common sx for attractive inputs
  const inputSx = {
    bgcolor: "white",
    borderRadius: 2,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc"
      },
      "&:hover fieldset": {
        borderColor: "#1976d2"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
        boxShadow: "0 0 8px rgba(25, 118, 210, 0.3)"
      }
    }
  };

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", p: { xs: 2, sm: 4, md: 6 } }}>
      <Paper elevation={4} sx={{ maxWidth: 1200, m: "auto", p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}>
          New Sales Invoice
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth required>
              <InputLabel>Customer</InputLabel>
              <Select
                value={customer}
                onChange={e => setCustomer(e.target.value)}
                sx={{ ...inputSx }}
              >
                <MenuItem value=""><em>Select a thirdparty</em></MenuItem>
                {/* Other options */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Ref. customer"
              value={refCustomer}
              onChange={e => setRefCustomer(e.target.value)}
              fullWidth
              sx={inputSx}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Invoice date"
              type="date"
              value={invoiceDate}
              onChange={e => setInvoiceDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
              sx={inputSx}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Project</InputLabel>
              <Select
                value={project}
                onChange={e => setProject(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value=""><em>Select a project</em></MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth required>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={e => setType(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value="Normal Invoice">Normal Invoice</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Incoterms</InputLabel>
              <Select
                value={incoterm}
                onChange={e => setIncoterm(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value=""><em>Select an incoterm</em></MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Item Table</Typography>
          <TextField
            placeholder="Enter Item Name..."
            fullWidth
            sx={{ ...inputSx, mb: 2 }}
          />
          <Grid container spacing={2}>
            {["Products", "VAT", "Disc.", "Qty", "Unit Price (Excl.Tax)", "Unit Price (Inc.Tax)", "Total (Inc.Tax)"].map((header) => (
              <Grid item xs={12} sm={2} key={header}>
                <Typography variant="subtitle2">{header}</Typography>
              </Grid>
            ))}
          </Grid>
          <Typography color="text.secondary" sx={{ mt: 2 }}>Empty</Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>Linked Files</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Doc Template</InputLabel>
                <Select
                  value={docTemplate}
                  onChange={e => setDocTemplate(e.target.value)}
                  sx={inputSx}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="crabe">crabe</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  sx={inputSx}
                >
                  <MenuItem value="en">English (United States)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: "flex", alignItems: "center" }}>
              <Button variant="outlined" color="secondary" sx={{ height: 40, ml: 1 }}>
                GENERATE
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Warehouse</InputLabel>
              <Select
                value={warehouse}
                onChange={e => setWarehouse(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value=""><em>Select a warehouse</em></MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Bank account</InputLabel>
              <Select
                value={bank}
                onChange={e => setBank(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value=""><em>Select a bank account</em></MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Date"
              type="date"
              value={date2}
              onChange={e => setDate2(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
              sx={inputSx}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Payment Note"
              value={paymentNote}
              onChange={e => setPaymentNote(e.target.value)}
              fullWidth
              sx={inputSx}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Payment Type</InputLabel>
              <Select
                value={paymentType}
                onChange={e => setPaymentType(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value=""><em>Select a payment type</em></MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Payment Terms</InputLabel>
              <Select
                value={paymentTerms}
                onChange={e => setPaymentTerms(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value="Due Upon Receipt">Due Upon Receipt</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Currency</InputLabel>
              <Select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                sx={inputSx}
              >
                <MenuItem value="ZMW">Zambian Kwacha (ZMW)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Button variant="text" color="primary">+ Add Shipment Details</Button>
        </Box>

        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography>Sub Total: <b>0.00 ZMW</b></Typography>
            <Typography>Shipping Charges: <b>0.00</b></Typography>
            <Typography>VAT: <b>0.00 ZMW</b></Typography>
            <Typography>Total (excl. tax): <b>0.00 ZMW</b></Typography>
            <Typography>Total (inc. tax): <b>0.00 ZMW</b></Typography>
            <Typography>Paid Amount: <b>0.00 ZMW</b></Typography>
            <Typography>Total (ZMW): <b>0.00</b></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Received Amount (ZMW)"
              type="number"
              value={receivedAmount}
              onChange={e => setReceivedAmount(e.target.value)}
              sx={inputSx}
            />
            <Typography color="error" sx={{ mt: 1 }}>
              Balance Amount (ZMW): 0
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
          <Button variant="outlined" color="primary">Save as Draft</Button>
          <Button variant="outlined" color="secondary">Online Payment</Button>
          <Button variant="outlined">Mail Invoice</Button>
          <Button variant="contained" color="primary">Save and Print</Button>
          <Button variant="contained" color="error">Cancel</Button>
        </Box>
      </Paper>
    </Box>
  );
}
export default ResponsiveStyledForm;
