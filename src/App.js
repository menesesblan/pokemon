import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./pages/pokemons/Pokemons";
import EmptyState from "./components/EmptyState/EmptyState";
import { WHITE } from "./share/style";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route
          path="*"
          element={<EmptyState text={"Página no encontrada"} color={WHITE} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
