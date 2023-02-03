import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { customers } from "../__mocks__/customers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTypeProduct,reset } from "../components/features/product/productSlice";

function Products() {
  const {listTypeProduct}= useSelector((state=>state.product))
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(reset())
    dispatch(getTypeProduct())
  },[dispatch])

  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          {
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth={false}>
                <CustomerListToolbar />
                <Box sx={{ mt: 3 }}>
                 {listTypeProduct!=null?( <CustomerListResults customers={listTypeProduct.data} />):null}
                </Box>
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}
export default Products;
