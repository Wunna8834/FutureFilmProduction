import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { TheaterList } from "./pages/TheaterList";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { CheckOut } from "./pages/CheckOut";
import { MovieLIst } from "./pages/MovieLIst";
import { Booking } from "./pages/Booking";
import { Account } from "./pages/Account";
import { Success } from "./pages/Success";
import { SignIn } from "./pages/SignIn";
function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie-list" element={<MovieLIst />}/>
        <Route path="/theater-list" element={<TheaterList />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/check-out" element={<CheckOut />}/>
        <Route path="/booking/:id" element={<Booking />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
