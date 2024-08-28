import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { getPokemon } from "./constant";
import Card from "../../../../components/Card/Card";
import { DialogItem, DialogImg, ContainerDialog, Chip } from "./style";
import { PRIMARY_COLOR, TERTIARY_COLOR } from "../../../../share/style";

const PokemonDetail = ({ open, setOpen, data }) => {
  const { name, url } = data;
  const [abilily, setAbilily] = useState([]);
  const [types, setTypes] = useState([]);
  const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) getPokemon(url, setAbilily, setTypes, setIsLoading, setImg);
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <ContainerDialog>
        {isLoading ? (
          "cargando..."
        ) : (
          <>
            <DialogTitle>{name}</DialogTitle>
            <DialogContent>
              <DialogImg src={img} alt="" />
              <DialogItem color={"primary"}>
                <h2>Habilidades</h2>
                <div className="dialogItem__item">
                  {abilily.map((data) => {
                    return <Chip>{data.ability.name + " "}</Chip>;
                  })}
                </div>
              </DialogItem>
              <DialogItem color={"tertiary"}>
                <h2>Tipos</h2>
                <div className="dialogItem__item">
                  {types.map((data) => {
                    return <Chip>{data.type.name + " "}</Chip>;
                  })}
                </div>
              </DialogItem>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>cerrar</Button>
            </DialogActions>
          </>
        )}
      </ContainerDialog>
    </Dialog>
  );
};
export default PokemonDetail;
