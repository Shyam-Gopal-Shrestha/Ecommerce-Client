import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/authPage/SignupPage";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/signup" element={<SignupPage />} />

        {/* private routes */}
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
