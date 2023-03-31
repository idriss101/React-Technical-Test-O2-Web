/* eslint-disable no-extend-native */
import {useTypeColors} from "../useTypeColors";

const TypePill = ({type, index}) => {
  const labelColor = useTypeColors(type);
  return (
    <span
      key={index}
      className="capitalize text-white text-xs font-bold rounded-full px-4 py-1 mr-2"
      style={{backgroundColor: labelColor}}
    >
      {type}
    </span>
  );
};

const Pokemon = (props) => {
  const {pokemon} = props;

  // Pad id with 0s
  Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 3)) {
      s = "0" + s;
    }
    return s;
  };

  // Display name, id and image
  return (
    <div className="flex flex-col items-center p-5 rounded bg-[#f8f7f7] max-w-[200px]">
      <p className="capitalize">Name: {pokemon?.name}</p>
      <p>Id: #{pokemon?.id.pad()}</p>
      <div>
        <img src={pokemon?.image} alt={pokemon?.name} />
      </div>
      <div className="flex flex-row items-center justify-center">
        {pokemon?.type[0]?.map((type, index) => (
          <TypePill type={type} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
