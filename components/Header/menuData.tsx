import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/#About",
  },
 
  {
    id: 3,
    title: "Companies",
    newTab: false,
    path: "/#Companies",
    submenu: [
      {
        id: 31,
        title: "",
        newTab: false,
        path: "/",
      },
      {
        id: 34,
        title: "Atoms Education",
        newTab: true,
        path: "https://education.atomsgroup.net/",
      },
      {
        id: 35,
        title: "Atoms Digital Solutions ",
        newTab: false,
        path: "https://atomsdigitalsolutions.atomsgroup.net/",
      },
      {
        id: 35,
        title: "Atoms 2.O",
        newTab: false,
        path: "https://atoms2.0.atomsgroup.net/",
      },
      // {
      //   id: 35.1,
      //   title: "Support",
      //   newTab: false,
      //   path: "/support",
      // },
      {
        id: 36,
        title: "",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 2,
    title: "Insights",
    newTab: false,
    path: "/#Insights",
  },
  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/#Team",
  },
 
 
];

export default menuData;
