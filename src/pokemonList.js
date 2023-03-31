import React, {useState, useEffect, useMemo} from "react";
import Pokemon from "./Pokemon/pokemon";
import axios from "axios";
import "./pokemonLoader.css";
import {Pagination} from "./Pagination";
import {FilterButtons} from "./FilterButtons";

const PokemonList = () => {
  // Initialize state of pokemons
  const [pokemonList, setPokemonList] = useState([]);
  const [nonFilteredPokemonList, setNonFilteredPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(25);
  const [menuItems] = useState(new Set());

  // This gets all the pokemon data from the API
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1281")
      .then((response) => {
        const basicInfo = response.data.results;
        let promises = basicInfo.map((result) => {
          return axios.get(result.url);
        });
        Promise.all(promises).then((response) => {
          const pokemon = response
            .map((result) => ({
              name: result.data.name,
              image: result.data.sprites["front_default"],
              type: new Array(
                result.data.types.map((type) => {
                  menuItems.add(type.type.name);
                  return type.type.name;
                })
              ),
              id: result.data.id,
            }))
            .sort((a, b) => (a.id > b.id ? 1 : -1));
          setPokemonList(pokemon);
          setNonFilteredPokemonList(pokemon);
          setLoading(false);
        });
      });
  }, []);

  // Get current pokemon
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // Change page
  const paginate = (pageNumber) => {
    window.scrollTo({top: 0, behavior: "smooth"});
    setCurrentPage(pageNumber);
  };

  // Keep track of filters
  const typeFilters = useMemo(() => [], []);

  // Filter pokemon by type
  const filterItem = (value) => {
    typeFilters.push(value);
    const filteredPokemonList = nonFilteredPokemonList.filter((newVal) => {
      return newVal.type[0].some((value) => typeFilters.includes(value));
    });
    setPokemonList(filteredPokemonList);
    setCurrentPage(1);
  };

  // Clear filters
  const clearFilters = () => {
    setPokemonList(nonFilteredPokemonList);
    setCurrentPage(1);
    typeFilters.length = 0;
  };

  // Render loading screen
  if (loading) {
    return (
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold underline text-xl my-8">
          Test front-end React o2web
        </h1>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold underline text-xl my-8">Loading...</h1>
          <div className="o-pokeball c-loader u-bounce"></div>
        </div>
      </div>
    );
  }

  // Render list of pokemon
  return (
    <div className="flex flex-col items-center text-center px-2">
      <h1 className="font-bold underline text-xl my-8">
        Test front-end React o2web
      </h1>

      <div className="flex flex-col items-center">
        <h2 className="mb-3">Filter By Type</h2>
        <FilterButtons
          menuItems={menuItems}
          filterItem={filterItem}
          typeFilters={typeFilters}
        />
        <button
          className="text-white bg-red-400 font-bold py-2 px-4 rounded-full mt-6"
          onClick={() => clearFilters()}
        >
          Clear Filters
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 my-6">
        {currentPokemon?.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} loading={loading} />
        ))}
      </div>
      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemon={pokemonList.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default PokemonList;
