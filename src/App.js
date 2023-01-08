import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import SignIn from "./components/routes/sign/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h1>Shopping page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
