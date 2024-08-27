import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./pages/pokemons/Pokemons";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pokemons" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
