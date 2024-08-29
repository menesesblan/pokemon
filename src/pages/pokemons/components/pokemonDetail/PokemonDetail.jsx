import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { getPokemon } from "./constant";
import { ContainerDialog } from "./style";
import Loading from "../../../../components/Loading/Loading";
import EmptyState from "../../../../components/EmptyState/EmptyState";
import { BLACK } from "../../../../share/style";

const PokemonDetail = ({ open, setOpen, data }) => {
  const { name, url } = data;
  const [ability, setAbility] = useState([]);
  const [types, setTypes] = useState([]);
  const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open)
      getPokemon(url, setAbility, setTypes, setIsLoading, setImg, setError);
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} data-testid="dialog">
      <ContainerDialog>
        {error ? (
          <EmptyState
            text={"!Error¡, por favor contactar con el administrador"}
            color={BLACK}
          />
        ) : (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <h2 className="pokemon-detail__title">{name}</h2>
                <DialogContent data-testid="dialogContent">
                  <img className="container-dialog__img" src={img} alt="" />
                  <div className="container-dialog__container-item container-dialog__container-item--primary">
                    <h2>Habilidades</h2>
                    <div className="dialogItem__item">
                      {ability.map((data) => {
                        return (
                          <div className="container-dialog__chip">
                            {data.ability.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="container-dialog__container-item container-dialog__container-item--tertiary">
                    <h2>Tipos</h2>
                    <div className="dialogItem__item">
                      {types.map((data) => {
                        return (
                          <div className="container-dialog__chip">
                            {data.type.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>cerrar</Button>
                </DialogActions>
              </>
            )}
          </>
        )}
      </ContainerDialog>
    </Dialog>
  );
};
export default PokemonDetail;
