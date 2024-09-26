import { createRouter, createWebHistory } from "vue-router";

import TbMainPage from "../pages/TbMainPage.vue";
import TbDestinationPage from "../pages/TbDestinationPage.vue";
import TbContactsPage from "../pages/TbContactsPage.vue";

export enum NamedRoutes {
  MainPage = "MainPage",
  DestinationPage = "DestinationPage",
  ContactsPage = "ContactsPage",
}

export const buildRouter = () => {

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: `/`,
        redirect: "/",
        children: [
          {
            path: "",
            name: NamedRoutes.MainPage,
            component: TbMainPage,
          },
          {
            path: "destination",
            name: NamedRoutes.DestinationPage,
            component: TbDestinationPage,
          },
          {
            path: "contacts",
            name: NamedRoutes.ContactsPage,
            component: TbContactsPage,
          },
        ],
      },
    ],
  });

  return router;
};