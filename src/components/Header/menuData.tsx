import { Menu } from "./type.menu";

// If it starts with id- its a scroll to button else a nextjs link/drop down menu
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/id-Services",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/id-About",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/id-Contact",
    newTab: false,
  },
];
export default menuData;
