import React from "react";

export const Pagination = ({
  pokemonPerPage,
  totalPokemon,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  // Create array of total page numbers
  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mt-3">
      <h3>Select Page</h3>
      <ul className="grid grid-cols-6 gap-1 lg:grid-cols-12">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`border border-black px-2 hover:bg-black hover:text-white transition-all cursor-pointer ${
              currentPage === number ? "bg-black text-white" : "text-black"
            }`}
            onClick={() => paginate(number)}
          >
            <button>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
