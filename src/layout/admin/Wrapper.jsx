import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AdminWrapper = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: "240px", bgcolor: "#f4f4f4" }}>
        <SideBar />
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminWrapper;
