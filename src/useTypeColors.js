export function useTypeColors(type) {
  switch (type.toLowerCase()) {
    case "grass":
      return "#7FC02A";
      break;
    case "normal":
      return "#A8A8A8";
      break;
    case "fighting":
      return "#C03028";
      break;
    case "flying":
      return "#9ABEF7";
      break;
    case "poison":
      return "#A040A3";
      break;
    case "ground":
      return "#E0B668";
      break;
    case "rock":
      return "#B8A05E";
      break;
    case "bug":
      return "#CCCA5A";
      break;
    case "ghost":
      return "#705DA5";
      break;
    case "steel":
      return "#6D8F9C";
      break;
    case "fire":
      return "#F08030";
      break;
    case "water":
      return "#689EF4";
      break;
    case "electric":
      return "#C09643";
      break;
    case "psychic":
      return "#EB2D77";
      break;
    case "ice":
      return "#98D8D8";
      break;
    case "dragon":
      return "#7038F8";
      break;
    case "dark":
      return "#504843";
      break;
    case "fairy":
      return "#F09AD9";
      break;
    default:
      return "#A39F99";
  }
}
