import Bottom from "../components/Header/Bottom";
import Header from "../components/Header/Header";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import { products } from "../__mocks__/products";

import { Box, Grid } from "@mui/material";
import { ProductCard } from "../components/product/product-card";
import { useEffect } from "react";
function ProductDetails() {
  useEffect(() => {
    document.title = "Sản phẩm";
  });
  return (
    <>
      <Header />
      <div className=" min-h-[416px] mt-[150px] my-auto bg-slate-200  ">
        <div className="pr-[16px] pl-[16px] border-none border-[1px] flex opacity-100 mt-[5px] mb-[1,5rem] mx-auto">
          <div className=" bg-white flex justify-center ml-[5px] mx-auto box-border  w-[55%] h-[500px] mr-9 rounded-lg mt-10">
            <div className="p-2 ">
              <div className="uppercase text-[13px] font-bold text-blue-2 flex items-center text-center mb-[20px]">
                Công ty tnhh hst huy hoàng
              </div>
              <div className="text-[15px] flex mt-2">
                {" "}
                <AddModeratorOutlinedIcon color="success" />
                <div className="ml-[5px]">Cam kết chất lương và uy tín</div>
              </div>
              <div className="text-[15px] flex mt-2">
                {" "}
                <CarRentalIcon color="success" />
                <div className="ml-[5px]">
                  Chuyên nhập khẩu phân phối phụ tùng máy xúc đào chính hãng
                </div>
              </div>
              <div className="text-[15px] flex mt-2">
                {" "}
                <BorderColorOutlinedIcon color="success" />
                <div className="ml-[5px]">
                  {" "}
                  Hyundai - Doosan - Vovol và dầu nhờn Kixx nội địa Hàn Quốc
                </div>
              </div>
              <div className="mr-[7px] mt-2 flex">
                {" "}
                <LocalPhoneIcon color="success" />
                <div className="ml-[7px] my-[3px]">0917178028</div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer bg-white mt-10 m-[5px]">
            <Box sx={{ pt: 5 }}>
              <Grid container spacing={1}>
                {products == null
                  ? null
                  : products.map((product, index) => (
                      <Grid
                        item
                        key={product.id}
                        lg={3}
                        md={4}
                        xs={15}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <ProductCard product={product} />
                      </Grid>
                    ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-3"></div>
      <Bottom />
    </>
  );
}
export default ProductDetails;
