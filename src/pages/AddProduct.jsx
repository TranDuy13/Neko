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
  CardActions,
  CardContent,
  Divider,
  Typography,
  TextField,
  CardHeader,
} from "@mui/material";
import * as Yup from "yup";
import { useRef, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getTypeProduct, reset } from "../components/features/product/productSlice";
function AddProducts() {
  const {listTypeProduct} = useSelector((state)=>state.product)
  const [avatarPreview, setAvatarPreview] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = "Thêm sản phẩm";
    dispatch(reset())
  },[reset]);
  useEffect(()=>{
    dispatch(getTypeProduct())
  },[getTypeProduct])
  const handleUpload = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };


  const formik = useFormik({
    initialValues: {
      name_product: "",
      type: "",
      from: "",
      code: "",
      detail: "",
      model: "",
      brand: "",
    },
    onSubmit: (values) => {
     values.imageProduct = avatarPreview
     dispatch(createProduct(values))
    },
    validationSchema: Yup.object({
      name_product: Yup.string().max(255).required("Tên sản phẩm là bắt buộc"),
      from: Yup.string().max(255).required("Loại của sản phẩm là bắt buộc"),
      code: Yup.string().max(255).required("Mã sản phẩm là bắt buộc."),
      detail: Yup.string()
        .max(2000)
        .required("Mô tả chi tiết sản phẩm là bắt buộc."),
      model: Yup.string().max(255).required("Model sản phẩm là bắt buộc."),
      brand: Yup.string()
        .max(255)
        .required("Mô tả chi tiết sản phẩm là bắt buộc."),
    }),
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
                  <Grid item lg={4} md={6} xs={12}>
                    <Card>
                      <CardContent>
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {avatarPreview != null ? (
                            <img
                              src={avatarPreview}
                              className="w-[300px] h-[200px]"
                            />
                          ) : (
                            <CameraAltIcon
                              src={avatarPreview}
                              sx={{
                                height: 64,
                                mb: 2,
                                width: 64,
                              }}
                            />
                          )}
                          <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                          ></Typography>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                          ></Typography>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                          ></Typography>
                        </Box>
                      </CardContent>
                      <Divider />
                      <CardActions>
                        <Button color="primary" fullWidth component="label">
                          Chèn ảnh sản phẩm
                          <input
                            type="file"
                            id="image-type-product"
                            onChange={handleUpload}
                            style={{ display: "none" }}
                          />
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item lg={8} md={6} xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                      <Card>
                        <CardHeader
                          subheader="Sửa thông tin sản phẩm"
                          title="Sản phẩm"
                        />
                        <Divider />
                        <CardContent>
                          <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.name_product &&
                                    formik.errors.name_product
                                )}
                                helperText={
                                  formik.touched.name_product &&
                                  formik.errors.name_product
                                }
                                label="Tên sản phẩm"
                                name="name_product"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                required
                                // defaultValue={user.data.admin.name}
                              />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.from && formik.errors.from
                                )}
                                helperText={
                                  formik.touched.from && formik.errors.from
                                }
                                label="Xuất xứ"
                                name="from"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                required
                                // defaultValue={user.data.admin.name}
                              />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.brand && formik.errors.brand
                                )}
                                helperText={
                                  formik.touched.brand && formik.errors.brand
                                }
                                label="Thương hiệu"
                                name="brand"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                required
                              />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.model && formik.errors.model
                                )}
                                helperText={
                                  formik.touched.model && formik.errors.model
                                }
                                label="Model"
                                name="model"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                required
                                // defaultValue={user.data.admin.name}
                              />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.code && formik.errors.code
                                )}
                                helperText={
                                  formik.touched.code && formik.errors.code
                                }
                                label="Mã sản phẩm"
                                name="code"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                required
                              />
                            </Grid>

                            <Grid item md={6} xs={12}>
                              <TextField
                                fullWidth
                                label="Loại sản phẩm"
                                name="type"
                                onChange={formik.handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                variant="outlined"
                              >
                                {listTypeProduct!=null?(listTypeProduct.data.map((option) => (
                                  <option
                                    key={option._id}
                                    value={option.name_type}
                                  >
                                    {option.name_type}
                                  </option>
                                ))):null}
                              </TextField>
                            </Grid>
                            <Grid item md={12} xs={12}>
                              <TextField
                                fullWidth
                                error={Boolean(
                                  formik.touched.detail && formik.errors.detail
                                )}
                                helperText={
                                  formik.touched.detail && formik.errors.detail
                                }
                                label="Mô tả chi tiết sản phẩm"
                                name="detail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                required
                                // defaultValue={user.data.admin.name}
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
                            Lưu sản phẩm
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
      </ThemeProvider>
    </>
  );
}

export default AddProducts;
