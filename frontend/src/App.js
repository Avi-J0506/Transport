import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTruck from "./pages/AddTruck";
import DeleteTruck from "./pages/DeleteTruck";
import EditTruck from "./pages/EditTruck";
import ShowTruck from "./pages/ShowTruck";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trucks/details/:id" element={<ShowTruck/>}/>
        <Route path="/trucks/add" element={<AddTruck/>}/>
        <Route path="/trucks/delete/:id" element={<DeleteTruck/>}/>
        <Route path="/trucks/edit/:id" element={<EditTruck/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
