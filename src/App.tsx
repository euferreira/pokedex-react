import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";
import { Pokemon, PokemonResponse } from "./models/pokemon.entity";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  CssBaseline,
  Pagination,
  ThemeProvider,
} from "@mui/material";
import SimpleBackdrop from "./components/Backdrop";
import theme from "./components/theme";
import PokemonCard from "./components/pokemon/card/Pokemon.card";

function App() {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);
  const [pokemonDetailsFiltered, setPokemonDetailsFiltered] =
    useState<PokemonResponse>();
  const [open, setOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleOpen = () => {
    setOpen(true);
  };

  const getPokemons = async (offset = 0) => {
    setOpen(true);
    try {
      const response = await api.get<PokemonResponse>(
        `/pokemon?limit=10&offset=${offset}`
      );
      const pokemonDetailsArray: Pokemon[] = [];
      setPokemonDetailsFiltered(response.data);

      for (const result of response.data.results) {
        const pokemonResponse = await api.get<Pokemon>(
          `/pokemon/${result.name}`
        );
        pokemonDetailsArray.push(pokemonResponse.data);
      }

      setPokemonDetails(pokemonDetailsArray);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);

    if (page === currentPage) {
      return; // Não recarrega se a página atual for a mesma
    }

    // Calcule o novo offset com base no número da página e recupere os dados
    const offset = (page - 1) * 10; // 10 itens por página
    getPokemons(offset);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SimpleBackdrop open={open} setOpen={handleOpen} />
      {/*<PokemonCard2 />*/}
      <Container className={"container"}>
        <ul>
          {pokemonDetails &&
            pokemonDetails.map((result) => (
              <PokemonCard result={result} key={uuidv4()} />
            ))}
        </ul>
        {pokemonDetailsFiltered && (
          <Pagination
            count={Math.ceil(pokemonDetailsFiltered.count / 10)}
            color="primary"
            onChange={handlePageChange}
            page={currentPage}
            className={"container__pagination"}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
