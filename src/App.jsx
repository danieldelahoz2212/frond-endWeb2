import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Register, SignIn, Inventory, Sale, Buy, Box} from "./screens/";
import Transfer from './screens/traslado/Transfer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/box" element={<Box />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
