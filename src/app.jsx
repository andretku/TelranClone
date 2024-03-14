import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from 'react-router-dom'
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
