import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import cake from "../../assets/aboutus/cake.png";
import vector1 from "../../assets/aboutus/vector1.png";
import vector2 from "../../assets/aboutus/vector2.png";
import vector3 from "../../assets/aboutus/vector3.png";
import pic1 from "../../assets/aboutus/pic1.png";
import pic2 from "../../assets/aboutus/pic2.png";
import pic3 from "../../assets/aboutus/pic3.png";
import pic4 from "../../assets/aboutus/pic4.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          py: 6,
        }}
      >
        <Breadcrumbs
          separator="/"
          aria-label="breadcrumb"
          sx={{
            color: "#fff",
            justifyContent: "center",
            display: "flex",
            fontSize: "64px",
            fontWeight: "bold",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "64px" }}>Home</Typography>
          <Typography sx={{ color: "#ff7b29", fontSize: "64px" }}>
            About Us
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            maxWidth: "700px",
            mx: "auto",
            color: "#9C9D9B",
            fontSize: "16px",
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget eros sit semper sit enim. Turpis aliquet sit ac eu
          ultrices ut. Sagittis vestibulum et quis non massa netus.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", marginBottom: "120px" }}>
        <Box>
          <img src={cake} alt="" width={650} height={520} />
        </Box>

        <Box sx={{ paddingTop: "98.5px", pl: 3 }}>
          <Typography
            sx={{ fontSize: "36px", color: "#fff", fontWeight: "600" }}
          >
            We provide healthy food for your family
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              maxWidth: "700px",
              mx: "auto",
              color: "#9C9D9B",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            every plate tells a story of fresh ingredients, rich flavors, and a
            passion for cooking. From the first bite to the last, we aim to make
            your experience warm, memorable, and full of taste. Whether you join
            us for a quick meal or a special occasion, we’re here to serve
            happiness on every plate
          </Typography>

          <Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                style={{
                  padding: "20px,15px",
                  backgroundColor: "#D68240",
                  borderRadius: "8px",
                  marginTop: "24px",
                }}
              >
                CONTACT US
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            maxWidth: "33.33%",
            flex: "0 0 33.33%",
            marginRight: "90px",
          }}
        >
          <Box>
            <img src={vector1} alt="" height={48} width={48} />
          </Box>

          <Box sx={{ paddingLeft: "24px" }}>
            <Box>
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Multi Cuisine
              </Typography>
            </Box>

            <Box variant="h1">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  color: "#fff",
                }}
              >
                In the new era of technology we look in the future with
                certainty life.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            maxWidth: "33.33%",
            flex: "0 0 33.33%",
            marginRight: "90px",
          }}
        >
          <Box>
            <img src={vector2} alt="" height={48} width={48} />
          </Box>

          <Box sx={{ paddingLeft: "24px" }}>
            <Box>
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Easy To Order
              </Typography>
            </Box>

            <Box variant="h1">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  color: "#fff",
                }}
              >
                In the new era of technology we look in the future with
                certainty life.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", maxWidth: "33.33%", flex: "0 0 33.33%" }}>
          <Box>
            <img src={vector3} alt="" height={48} width={48} />
          </Box>

          <Box sx={{ paddingLeft: "24px" }}>
            <Box>
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Fast Delivery
              </Typography>
            </Box>

            <Box variant="h1">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  color: "#fff",
                }}
              >
                In the new era of technology we look in the future with
                certainty life.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}></Box>

      <Box sx={{ paddingTop: "135px", textAlign: "center" }}>
        <Box sx={{ paddingBottom: "34px" }}>
          <Typography
            sx={{ fontSize: "36px", color: "#fff", fontWeight: "semibold" }}
          >
            Frequently Asked Question
          </Typography>
        </Box>

        <Box sx={{ paddingBottom: "78px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "1.2",
              color: "#9C9D9B",
              mx: "auto",
              maxWidth: "720px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
            ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ maxWidth: "50%", flex: "0 0 50%" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "27px" }}>
              <img src={pic1} alt="" width={247} height={216} />
            </Box>
            <Box>
              <img src={pic2} alt="" width={247} height={216} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", marginTop: "27px" }}>
            <Box sx={{ marginRight: "27px" }}>
              <img src={pic3} alt="" width={247} height={216} />
            </Box>
            <Box>
              <img src={pic4} alt="" width={247} height={216} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ maxWidth: "50%", flex: "0 0 50%" }}>
          <Box>
            <Accordion
              sx={{
                marginBottom: "60px",
                backgroundColor: "#182F31",
                color: "#fff",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "1" }}
                  component="span"
                >
                  {" "}
                  Do you offer home delivery?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sed, sit reiciendis necessitatibus odit earum rem cum
                fugiat enim fugit quisquam saepe repellat porro perspiciatis
                expedita quos? Magni ex quis ipsam minima delectus ut tenetur
                debitis asperiores inventore, numquam provident eos rem eveniet
                itaque quae fugit praesentium repudiandae ullam?
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                marginBottom: "60px",
                backgroundColor: "#182F31",
                color: "#fff",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "1" }}
                  component="span"
                >
                  {" "}
                  Can I book a table online?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sed, sit reiciendis necessitatibus odit earum rem cum
                fugiat enim fugit quisquam saepe repellat porro perspiciatis
                expedita quos? Magni ex quis ipsam minima delectus ut tenetur
                debitis asperiores inventore, numquam provident eos rem eveniet
                itaque quae fugit praesentium repudiandae ullam?
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                marginBottom: "60px",
                backgroundColor: "#182F31",
                color: "#fff",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "1" }}
                  component="span"
                >
                  Do you have vegetarian and vegan option?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sed, sit reiciendis necessitatibus odit earum rem cum
                fugiat enim fugit quisquam saepe repellat porro perspiciatis
                expedita quos? Magni ex quis ipsam minima delectus ut tenetur
                debitis asperiores inventore, numquam provident eos rem eveniet
                itaque quae fugit praesentium repudiandae ullam?
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                marginBottom: "60px",
                backgroundColor: "#182F31",
                color: "#fff",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "1" }}
                  component="span"
                >
                  {" "}
                  What are your opening hours?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sed, sit reiciendis necessitatibus odit earum rem cum
                fugiat enim fugit quisquam saepe repellat porro perspiciatis
                expedita quos? Magni ex quis ipsam minima delectus ut tenetur
                debitis asperiores inventore, numquam provident eos rem eveniet
                itaque quae fugit praesentium repudiandae ullam?
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
