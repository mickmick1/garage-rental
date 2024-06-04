import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',  // Light gray background
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
  },
});


const StyledCarousel = styled(Carousel)({
  '& .slick-prev, & .slick-next': {
    zIndex: 1,
  },
});

const photos = [
  `${process.env.PUBLIC_URL}/1.jpg`,
  `${process.env.PUBLIC_URL}/2.jpeg`
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', py: 4 }}>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
              Garage Rental
            </Typography>
            <Typography variant="h5" align="center">
              Lužická 1699/36
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="center">
              Praha 2 - Vinohrady
            </Typography>
            <StyledCarousel {...settings}>
              {photos.map((photo, index) => (
                <Box
                  key={index}
                  component="img"
                  sx={{
                    width: '100%',
                    maxWidth: '100%', // Ensures the photo does not exceed the container width
                    height: 'auto',
                    borderRadius: 2,
                  }}
                  src={photo}
                  alt={`Garage ${index + 1}`}
                />
              ))}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!3m2!1scs!2scz!4v1717511153095!5m2!1scs!2scz!6m8!1m7!1svGstYe8sqKDEtSE-4CBXEg!2m2!1d50.07354039795067!2d14.44679316518225!3f117.76476851892494!4f-8.843957234231496!5f0.7820865974627469"
                  width="100%"
                  height="335px"
                  sx={{
                    border: 0,
                    maxWidth: '100%', // Ensures the iframe does not exceed the container width
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></Box>
              </Box>
            </StyledCarousel>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" align="center">
                Contact:
              </Typography>
              <Typography variant="body1" align="center">
                Phone: +420 111 222 333
              </Typography>
              <Typography variant="body1" align="center">
                Email: contact@garage-rental.com
              </Typography>
              <Typography variant="body1" align="center">
                Location: Praha 2 - Lužická 36
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
