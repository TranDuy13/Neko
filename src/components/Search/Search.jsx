import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Search.scss";
import { Box } from "@mui/system";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowIcon from "@mui/icons-material/Window";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import logo from "./logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getTypeProduct, reset } from "../features/product/productSlice";
function Search() {
  const { listTypeProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
    dispatch(getTypeProduct());
  }, [dispatch, reset]);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="search-wrapper ">
        <div className="container">
          <Link to="/" className="top-1875 box-border">
            <div className=" flex items-center">
              <img src={logo} alt="logo" className="w-[120px]" />
            </div>
          </Link>
          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
          >
            <Box sx={{ position: "relative" }}>
              <button
                className="top-1875 box-border mr-[20px]"
                onClick={handleClick}
              >
                <div className="svg-icon flex items-center dropdown min-w-[200px]">
                  <DensityMediumOutlinedIcon
                    sx={{ fontSize: "13px", mr: "3px" }}
                  />
                  Danh mục sản phẩm{" "}
                </div>
              </button>
              {open ? (
                <div className="dropdown-content">
                  {listTypeProduct.data != null
                    ? listTypeProduct.data.map((item) => (
                        <div className="pl-[30px] cursor-pointer hover:bg-gray-200 hover:font-bold hover:text-indigo-900 pt-[10px] pb-[10px]">
                          <div className="flex h-[2rem] items-center justify-start gap-2 w-[250px]">
                            <div className="m-0 p-0 max-w-[unset]">
                              {item.name_type}
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              ) : null}
            </Box>
          </ClickAwayListener>

          <div className="flex flex-col justify-start w-840 relative bg-gray-200 min-w-[0px] ">
            <div className="w-full item-search">
              <div className="flex item-input-search bg-gray-200 ">
                <form action="" className="form-search bg-gray-200 ">
                  <input className="flex flex-1 items-center outline-none border-0 p-0 m-0 bg-gray-200 " />
                </form>
                <button className="relative overflow-visible outline-0 bg-blue-1 h-34 pl-4 pr-4 minWidth-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 search-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="search-cart"></div>
        </div>
        <div>
          <marquee behavior="scroll" direction="left">
            Chất lượng - uy tín tạo nên thương hiệu!
          </marquee>
        </div>
      </div>
    </>
  );
}
export default Search;
