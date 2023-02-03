import { Container, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { theme } from "../theme";
import { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  CardHeader,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypeProductById,
  reset,
  updateTypeProduct,
} from "../components/features/product/productSlice";
import { useParams } from "react-router-dom";

function ProductTypeDetail() {
  const { typeProduct, isSuccess, isError, message } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    document.title = "Thêm loại sản phẩm";
    dispatch(reset());
  }, [reset]);
  useEffect(() => {
    if (id) {
      dispatch(getTypeProductById(id));
    }
  }, [dispatch, id]);
  useEffect(()=>{
    if(isSuccess){
      toast.success(message.message)
    }
    if(isError){
      toast.error(message.message)
    }
  },[isError,isSuccess])
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTypeProduct({
      id: id,
      name_type: e.target.name_type.value
    }))
  };
  return (
    <>
      {typeProduct != null ? (
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
                <Container maxWidth="lg">
                  <Typography sx={{ mb: 3 }} variant="h4">
                    Chi tiết loại sản phẩm 
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item lg={8} md={6} xs={12}>
                      <form onSubmit={handleSubmit}>
                        <Card>
                          <CardHeader title="Loại sản phẩm" />
                          <Divider />
                          <CardContent>
                            <Grid container spacing={3}>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  defaultValue={typeProduct.data.name_type}
                                  label="Loại"
                                  name="name_type"
                                  variant="outlined"
                                  required
                                />
                              </Grid>
                            </Grid>
                          </CardContent>
                          <Divider />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              p: 2,
                            }}
                          >
                            <Button
                              color="primary"
                              variant="contained"
                              type="submit"
                            >
                              Lưu
                            </Button>
                          </Box>
                        </Card>
                      </form>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            }
          </DashboardLayout>
          <ToastContainer />
        </ThemeProvider>
      ) : null}
    </>
  );
}

export default ProductTypeDetail;
