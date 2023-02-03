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
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createTypeProduct, reset } from "../components/features/product/productSlice";

function AddProductType() {
  const { isSuccess, isError, message } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name_type: "",
    },
    onSubmit: (values) => {
      dispatch(createTypeProduct(values));
    },
    validationSchema: Yup.object({
      name_type: Yup.string().max(255).required("Loại sản phẩm là bắt buộc"),
    }),
  });
  useEffect(() => {
    document.title = "Thêm loại sản phẩm";
    dispatch(reset())
  },[reset]);
  useEffect(() => {
    if(isSuccess){
      toast.success("Thêm loại sản phẩm thành công")
    }
    if(isError){
      toast.error(message)
    }
  });

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
              <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4">
                  Thêm sản phẩm
                </Typography>
                <Grid container spacing={3}>
                  <Grid item lg={8} md={6} xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                      <Card>
                        <CardHeader title="Loại sản phẩm" />
                        <Divider />
                        <CardContent>
                          <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.name_type &&
                                    formik.errors.name_type
                                )}
                                helperText={
                                  formik.touched.name_type &&
                                  formik.errors.name_type
                                }
                                label="Loại"
                                name="name_type"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
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
        <ToastContainer/>
      </ThemeProvider>
    </>
  );
}

export default AddProductType;
