import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

export const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const formatDate = (date) => {
    var d = new Date(date);
    return (
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":")
    );
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tên loại sản phẩm</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Ngày tạo</TableCell>
                <TableCell>Ngày cập nhật</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer._id}
                  selected={selectedCustomerIds.indexOf(customer._id) !== -1}
                >
                  <TableCell>
                    <Link to={`/admin/producttype/item/${customer._id}`}>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Typography color="textPrimary" variant="body1">
                          {customer.name_type}
                        </Typography>
                      </Box>
                    </Link>
                  </TableCell>

                  <TableCell>
                    <Link to={`/admin/producttype/item/${customer._id}`}>
                      {customer._id}{" "}
                    </Link>
                  </TableCell>

 
                    <TableCell>
                    <Link to={`/admin/producttype/item/${customer._id}`}>{formatDate(customer.createdAt)}                  </Link>P
                    </TableCell>

                  <Link to={`/admin/producttype/item/${customer._id}`}>
                    <TableCell>{formatDate(customer.updatedAt)}</TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};
