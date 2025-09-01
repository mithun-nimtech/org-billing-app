import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

const NewSalesOrder = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#fff", minHeight: "100vh" }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        <span role="img" aria-label="cart" style={{ marginRight: 8 }}>
          🛒
        </span>
        Create Order
      </Typography>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <FormLabel sx={{ color: "red", mb: 1 }}>Ref.*</FormLabel>
          <TextField
            variant="outlined"
            value="Draft"
            disabled
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ sx: { color: "#444" } }}
          />

          <FormLabel sx={{ color: "red", mb: 1 }}>Customer*</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a thirdparty</MenuItem>
              {/* Add options */}
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Planned date of delivery</FormLabel>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
            <TextField type="time" variant="outlined" fullWidth />
          </Box>

          <FormLabel sx={{ color: "red", mb: 1 }}>Payment Type*</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a payment type</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Availability delay</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a availability delay</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Channel</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a channel</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Default doc template</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select defaultValue="einstein">
              <MenuItem value="einstein">einstein</MenuItem>
              {/* More templates */}
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Incoterms</FormLabel>
          <Box sx={{ display: "flex", gap: 1 }}>
            <FormControl fullWidth>
              <Select displayEmpty>
                <MenuItem value="">Select a incoterm</MenuItem>
              </Select>
            </FormControl>
            <TextField variant="outlined" placeholder="Value" sx={{ width: "25%" }} />
          </Box>

          <TextField
            label="Note (private)"
            multiline
            rows={3}
            fullWidth
            sx={{ mt: 2 }}
            placeholder="Enter private note"
          />
        </Grid>

        {/* Center Column */}
        <Grid item xs={12} md={4}>
          <TextField
            label="Ref. customer"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            placeholder="Reference customer"
          />

          <FormLabel sx={{ color: "red", mb: 1 }}>Date*</FormLabel>
          <TextField
            type="date"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            defaultValue={new Date().toISOString().split("T")[0]}
            InputLabelProps={{ shrink: true }}
          />

          <FormLabel sx={{ mb: 1 }}>Payment Terms</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a payment terms</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Bank account</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a bank account</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Shipping method</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a shipping method</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Project</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select displayEmpty>
              <MenuItem value="">Select a project</MenuItem>
            </Select>
          </FormControl>

          <FormLabel sx={{ mb: 1 }}>Currency</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Select defaultValue="Zambian Kwacha (ZMW)">
              <MenuItem value="Zambian Kwacha (ZMW)">Zambian Kwacha (ZMW)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Note (public)"
            multiline
            rows={3}
            fullWidth
            sx={{ mt: 2 }}
            placeholder="Enter public note"
          />
        </Grid>

        {/* Right Column - Empty or add if needed */}
        <Grid item xs={12} md={4}>
          {/* Add any additional fields or leave empty */}
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button variant="contained" color="primary">
          Create Draft
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default NewSalesOrder;
