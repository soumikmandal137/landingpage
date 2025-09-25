import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentIcon from "@mui/icons-material/Comment";

export const Singleblog = ({ value }) => {
  const categories = [
    { name: "Hamburger", count: 20 },
    { name: "Pizza", count: 6 },
    { name: "Cold Drink", count: 8 },
    { name: "Hot Drink", count: 2 },
    { name: "Pasta", count: 5 },
  ];

  console.log("props", value);
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ maxWidth: "60%", flex: "0 0 60%" }}>
        <Card sx={{ maxWidth: 360, bgcolor: "#182f31", borderRadius: "15px" }}>
          <CardActionArea>
            <img src={value.img} alt="" width={"404px"} height={"312px"} />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  color: "#fff",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PersonIcon fontSize="small" sx={{ color: "orange" }} />
                  <Typography variant="body1">{value.user.role}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CalendarTodayIcon
                    fontSize="small"
                    sx={{ color: "orange" }}
                  />
                  <Typography variant="body1">{value.user.date}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CommentIcon fontSize="small" sx={{ color: "orange" }} />
                  <Typography variant="body1">{value.user.comments}</Typography>
                </Box>
              </Box>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#ffffffff", fontSize: "25px" }}
              >
                {value.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#9C9D9B",
                  fontSize: "20px",
                  fontWeight: "300",
                  textAlign: "center",
                }}
              >
                {value.description}
              </Typography>

              <Button sx={{ fontSize: "18px" }}>Read More</Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box sx={{ maxWidth: "40%", flex: "0 0 40%", ml: 20 }}>
        <Box
          sx={{
            backgroundColor: "#0d0f11",
            border: "1px solid #d57b3e",
            borderRadius: "8px",
            p: 2,
            maxWidth: 280,
            color: "#fff",
          }}
        >
          {/* Title */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            Categories
          </Typography>

          {/* Inner list container */}
          <Box
            sx={{
              backgroundColor: "#11161d",
              borderRadius: "8px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {categories.map((cat, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#fff",
                }}
              >
                <Typography>{cat.name}</Typography>
                <Typography>({cat.count})</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
