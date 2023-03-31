# Technical test React - O2 web

We made the basic connection of the API using [pokeapi](https://pokeapi.co/) with the display of the first 25 pokemon and their image. (sprite/front_default).

Please do this test in React.js. For styling either in CSS module, in SASS or in Tailwind (project base has been done in css module but feel free to update it with your way).

## Tasks

- Display all pokemon via the API (there are a total of 1281) using pagination (25 pokemon per page).
=> The Pokémon's name, their ID number, and an image of the Pokemon.
=> The ID is the number of the pokemon in the API. For example, Raichu is the pokemon with an ID of 26.
=> Use Sprite/front_default key for image
=> The pokemon types should be displayed below the pokemon. (eg Bulbasaur must have 2 Poison and Grass types).

- Manage a filter that will display Pokémon by type.
=> Watch out! A Pokémon can have 1 to 2 types
=> It is possible to select more than one type in the filter. In which case we display all the Pokémon possessing one of the types among the selected types
=> Example: if you choose the types “fire” and “electric”, you must display all pokemon with at least one of these two types, and not those with both types

## Layout

Dekstop: 5 per row
Mobile: 2 per row 

## Frontend System Requirements

- node v14.x
- `npm install` (to install node_modules locally)
- `npm start`