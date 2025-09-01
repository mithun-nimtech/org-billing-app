import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Grid
} from "@mui/material";

const NewInvoice = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#fff", minHeight: "100vh" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        New Invoice
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormLabel sx={{ mb: 1 }}>Ref.</FormLabel><br />
          <TextField variant="outlined" value="Draft" sx={{ mb: 2, width: "100%" }} disabled />
          <FormLabel>Type</FormLabel>
          <RadioGroup row name="type" sx={{ mb: 2 }}>
            <FormControlLabel value="Standard invoice" control={<Radio />} label="Standard invoice" />
            <FormControlLabel value="Down payment invoice" control={<Radio />} label="Down payment invoice" />
            <FormControlLabel value="Lpo" control={<Radio />} label="Lpo" />
            <FormControlLabel value="Export" control={<Radio />} label="Export" />
            <FormControlLabel value="Credit note" control={<Radio />} label="Credit note" />
            <FormControlLabel value="Template invoice" control={<Radio />} label="Template invoice" />
          </RadioGroup>
          <TextField label="Ref. customer" variant="outlined" sx={{ mb: 2, width: "100%" }} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel sx={{ mb: 1 }}>Payment Terms</FormLabel>
            <Select defaultValue="Due Upon Receipt">
              <MenuItem value="Due Upon Receipt">Due Upon Receipt</MenuItem>
              {/* Add more payment terms as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Bank account</FormLabel>
            <Select>
              <MenuItem value="">Select a bank account</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Incoterms</FormLabel>
            <Select>
              <MenuItem value="">Select a incoterms</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Currency</FormLabel>
            <Select defaultValue="Zambian Kwacha (ZMW)">
              <MenuItem value="Zambian Kwacha (ZMW)">Zambian Kwacha (ZMW)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Customer</FormLabel>
            <Select>
              <MenuItem value="">Select a thirdparty</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Invoice date" type="date" variant="outlined" sx={{ mb: 2, width: "100%" }} InputLabelProps={{ shrink: true }} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Payment Type</FormLabel>
            <Select>
              <MenuItem value="">Select a payment type</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Project</FormLabel>
            <Select>
              <MenuItem value="">Select a project</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Doc template</FormLabel>
            <Select defaultValue="crabe">
              <MenuItem value="crabe">crabe</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button variant="contained" color="primary">Create Draft</Button>
        <Button variant="contained" color="error">Cancel</Button>
      </Box>
    </Box>
  );
};

export default NewInvoice;
