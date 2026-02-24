import Home from "./Components/routes/home/home.component";
import { Routes ,Route } from "react-router-dom";
import Navigation from "./Components/routes/navigation/navigation.component";
const App = () => {

  return <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>} />
    <Route path="/shop" element={<p>Hello World.</p>} />
    </Route>
  </Routes>

};

export default App;
