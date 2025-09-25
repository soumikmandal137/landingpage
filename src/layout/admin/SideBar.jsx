import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  ExpandLess,
  ExpandMore,
  Inventory,
  Person,
  Article,
  Group,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";

// JSON config for sidebar
const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard", // direct link
  },
  {
    title: "Products",
    icon: <Inventory />,
    children: [
      { title: "Product List", path: "/admin/product/list" },
      { title: "Add Product", path: "/admin/product/add" },
    ],
  },
  {
    title: "Chefs",
    icon: <Person />,
    children: [
      { title: "Chef List", path: "/admin/chef/list" },
      { title: "Add Chef", path: "/admin/chef/add" },
    ],
  },
  {
    title: "Blogs",
    icon: <Article />,
    children: [
      { title: "Blog List", path: "/admin/blog/list" },
      { title: "Add Blog", path: "/admin/blog/add" },
    ],
  },
  {
    title: "Users",
    icon: <Group />,
    children: [
      { title: "User List", path: "/admin/user/list" },
      { title: "Add User", path: "/admin/user/add" },
    ],
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState({});

  const handleToggle = (title) => {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <List>
        {menuItems.map((menu) => (
          <React.Fragment key={menu.title}>
            {/* Direct Link (no children) */}
            {!menu.children ? (
              <ListItemButton component={Link} to={menu.path || "#"}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            ) : (
              <>
                {/* Parent with Dropdown */}
                <ListItemButton onClick={() => handleToggle(menu.title)}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.title} />
                  {open[menu.title] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open[menu.title]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.children.map((child) => (
                      <ListItemButton
                        key={child.title}
                        component={Link}
                        to={child.path}
                        sx={{ pl: 6 }}
                      >
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
