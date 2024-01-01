import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NoPage from "./NoPage";
import AudioVisualiser from "./AudioVisualiser";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Home() {
  return (
    <Container sx={{ height: "100%", p: "1em" }}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" gutterBottom>
          Mehri Amin
        </Typography>
        <Typography variant="body1" gutterBottom>
          Front-end developer based in Sydney, Australia.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Link to="/audio-visualiser">Audio Visualiser</Link>
      </Box>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="audio-visualiser" element={<AudioVisualiser />} />
      </Routes>
    </BrowserRouter>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
];

export default App;
