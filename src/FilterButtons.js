import {useTypeColors} from "./useTypeColors";

export const FilterButtons = ({filterItem, menuItems, typeFilters}) => {
  const menuItemsArray = Array.from(menuItems);

  return (
    <div className="grid grid-cols-3 gap-2 lg:grid-cols-6">
      {menuItemsArray.map((value, index) => (
        <Button
          key={index}
          filterItem={filterItem}
          label={value}
          typeFilters={typeFilters}
        />
      ))}
    </div>
  );
};

const Button = ({key, filterItem, label, typeFilters}) => {
  const isClicked = typeFilters.includes(label);
  const labelColor = useTypeColors(label);
  console.log(labelColor);

  return (
    <button
      key={key}
      className="text-white font-bold py-2 px-4 rounded-full mx-2 transition-all capitalize"
      onClick={() => {
        filterItem(label);
      }}
      style={{backgroundColor: isClicked ? labelColor : "gray"}}
      disabled={isClicked}
    >
      {label}
    </button>
  );
};
