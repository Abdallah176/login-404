import Loader from "./Components/Lodear";
import LoginPage from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoader } from "./Store";
import ErrorPage from "./Pages/Error";
import Profile from "./Pages/Profile";

export default function App(){
  const { index } = useLoader();
  return(
    <div className="App">
      {index && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

