import HomeNavbar from "./components/navbar/HomeNavbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <HomeNavbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
