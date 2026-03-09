import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Settings from "./pages/settings";
import NotFound from "./pages/not-found";
import ComingSoon from "./pages/coming-soon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/settings" replace />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<ComingSoon />} />
        <Route path="/dashboard" element={<ComingSoon />} />
        <Route path="/projects" element={<ComingSoon />} />
        <Route path="/tasks" element={<ComingSoon />} />
        <Route path="/reporting" element={<ComingSoon />} />
        <Route path="/users" element={<ComingSoon />} />
        <Route path="/support" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
