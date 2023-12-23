import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css"; 
import {
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  CardContent,
  Checkbox,
  Fab,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

const App = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 500, padding: 5, margin: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://placekitten.com/320/180"
          alt="placekitten"
          sx={{
            "@media screen and (max-width: 600px)": {
              height: "150px",
            },
          }}
        />
        <CardContent
          sx={{
            "@media screen and (max-width: 600px)": {
              paddingBottom: "20px",
            },
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Material UI Test{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Button
            variant="contained"
            sx={{ margin: "30px 0px", display: "block" }}
          >
            Let's Go
          </Button>
          <ButtonGroup
            variant="contained"
            sx={{ marginBottom: "20px" }}
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Required"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              label="Label"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <Checkbox
              label="Label"
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </FormGroup>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </CardContent>
      </Card>
    </Box>
  );
};
export default App;