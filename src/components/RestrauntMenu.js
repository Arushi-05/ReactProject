import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu.js";
const RestrauntMenu = () => {
  const { id } = useParams();
  const resInfo = useRestMenu(id);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_LINK + id);
  //   const json = await data.json();
  //   setresInfo(json?.data);
  //   console.log(json?.data);
  // };
  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        Rating: {avgRating} {"    "}
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
