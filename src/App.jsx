import Home from "./pages/home/Home";
import {Route, Routes}  from "react-router-dom";
import Header from "./core/components/Header/header";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Footer from "./core/components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
    
    </>
  );
}

export default App;
