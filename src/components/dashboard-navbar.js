import PropTypes from "prop-types";

import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,

  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { MenuList } from "./menu-list";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0px 1px 5px rgb(100 116 139 / 12%)",
}));

function DashboardNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            // onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
    
          <Tooltip title="Account">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src="/static/images/avatars/avatar_1.png"
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
        <MenuList
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        />
      </DashboardNavbarRoot>
    </>
  );
}
export default DashboardNavbar;
DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
