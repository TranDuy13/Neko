import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

export const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Loại Sản phẩm
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/producttype/new"
          >
            {" "}
            Thêm loại sản phẩm
          </Link>
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
    </Box>
  </Box>
);
