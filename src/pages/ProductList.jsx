import { DashboardLayout } from "../components/dashboard-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../__mocks__/products";
import { Link } from "react-router-dom";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { TypeProductCard } from "../components/product/type-product-card";
import { useEffect, useState } from "react";

function ProductList() {
  useEffect(() => {
    document.title = "Sản phẩm";
  });
  const [pages, setPage] = useState(1)

  const handleChange = (e, page) => {
    setPage(page)
  }
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
                <ProductListToolbar />
                <Box sx={{ pt: 3 }}>
                  <Grid container width={'103%'}>
{/* 
                        {products.data
                          .slice((pages - 1) * 32, (pages - 1) * 32 + 32)
                          .map((product) => (
                            <Link to={`/seller/products/${product._id}`}>
                              <div className=" flex cursor-pointer bg-white m-[5px] h-full hover:border-[1px] hover:border-[#ee4d2d] hover:border-b-[3px]">
                                <div className="border-r-[1px] border-b-[1px] max-w-[190px] h-[auto] flex items-center justify-center flex-col ">
                                  <div className=" mt-[10%] overflow-visible ">
                                    <div className="relative ">
                                      <div className=" ">
                                        <img src={product.img.url} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-initial flex flex-col p-[0.5rem]">
                                    <div className="flex-grow min-h-[1.75rem] break-words overflow-hidden text-ellipsis text-[0.75rem] leading-[14px]">
                                      <div
                                        style={{ display: "-webkit-box" }}
                                        className="product"
                                      >
                                        {product.name_product}
                                      </div>
                                    </div>
                                    <div className="flex justify-center items-center pt-[5px]">
                                      <span className="text-[0.75rem] text-[#ee4d2d]">
                                        ₫
                                      </span>
                                      <span className="text-[1rem] text-[#ee4d2d]">
                                        {product.price.toLocaleString(
                                          undefined,
                                          { maximumFractionDigits: 2 }
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                    ))} */}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 3,
                  }}
                >
                  <Pagination color="primary" count={3} size="small" />
                </Box>
              </Container>
            </Box>
          }
        </DashboardLayout>
      </ThemeProvider>
    </>
  );
}
export default ProductList;
