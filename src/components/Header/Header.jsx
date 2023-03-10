import "./header.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
function Header() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 bg-gradient-to-b mb-[10px]">
        <div className="header">
          <nav className="nav-wrapper">
            <div className="nav-space text-[15px] leading-[20px]">
              Công ty TNHH HST Huy Hoàng -
              <LocalPhoneIcon />
              hotline: 0917178028
            </div>
            <ul className="flex items-center list-none h-2.125">
              <li className="cursor-pointer select-none flex items-center text-black justify-center relative pl-625"></li>
              <li className="cursor-pointer select-none flex items-center text-black justify-center relative pl-625">
                <div className="relative cursor-pointer flex items-center">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginBottom: "3px",

                      fontSize: "13px",
                      display: "flex",
                      lineHeight: "20px",
                    }}
                    to="/admin"
                  >
                    {" "}
                    <FolderSharedOutlinedIcon className="mr-[5px] mt-[1px] w-[20px]" />
                    <div className="mt-[3px]">
                      {" "}
                      {user ? `Quản lý` : `Đăng nhập`}
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <Search />
      </header>
    </>
  );
}
export default Header;
