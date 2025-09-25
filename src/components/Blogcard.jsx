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
import { useNavigate } from "react-router-dom";


const Blogcard = ({ value }) => {
  const navigate=useNavigate();
  console.log("props", value);

  const readmore = () => {
    navigate('/blog/:id');
  };

  return (
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
            {/* Role */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonIcon fontSize="small" sx={{ color: "orange" }} />
              <Typography variant="body1">{value.user.role}</Typography>
            </Box>

            {/* Date */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CalendarTodayIcon fontSize="small" sx={{ color: "orange" }} />
              <Typography variant="body1">{value.user.date}</Typography>
            </Box>

            {/* Comments */}
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

          <Button  sx={{ fontSize: "18px" }} onClick={()=>navigate(`/blog/${value.id}`)}>
            Read More
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Blogcard;
