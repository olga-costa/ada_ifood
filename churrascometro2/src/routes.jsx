import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home";
import { Pessoas } from "./pages/pessoas";
import { Result } from "./pages/resultado";
export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pessoas" element={<Pessoas />} />
      <Route path="/resultado" element={<Result />} />
    </Routes>
  );
};
