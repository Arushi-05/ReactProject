import { useEffect, useState } from "react";
import { MENU_LINK } from "./content";

const useRestMenu = (id) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_LINK + id);
    const json = await data.json();
    setresInfo(json?.data);
  };

  return resInfo;
};

export default useRestMenu;
