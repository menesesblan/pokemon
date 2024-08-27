import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getPokemon } from "./constant";

const PokemonDetail = ({ open, setOpen, data }) => {
  const { name, url } = data;
  const [abilily, setAbilily] = useState([]);
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) getPokemon(url, setAbilily, setTypes, setIsLoading);
  }, [open]);

  return (
    <>
      {isLoading ? (
        "cargando..."
      ) : (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{name}</DialogTitle>
          <DialogContent>
            <div>
              <h2>Habilidades:</h2>
              {abilily.map((data) => {
                return <p>{data.ability.name}</p>;
              })}
            </div>
            <div>
              <h2>Tipos:</h2>
              {types.map((data) => {
                return <p>{data.type.name}</p>;
              })}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              cerrar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
export default PokemonDetail;
