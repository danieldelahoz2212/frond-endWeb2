import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Register, SignIn } from "./screens/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
