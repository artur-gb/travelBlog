import { createRouter, createWebHistory } from "vue-router";

import TbMainPage from "../pages/TbMainPage.vue";
import TbPostsPage from "../pages/TbPostsPage.vue";
import TbContactsPage from "../pages/TbContactsPage.vue";
import TbAuthPage from "../pages/TbAuthPage.vue";

export enum NamedRoutes {
  AuthPage = "Authorization",
  MainPage = "MainPage",
  PostsPage = "PostsPage",
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
            path: "auth",
            name: NamedRoutes.AuthPage,
            component: TbAuthPage,
          },
          {
            path: "",
            name: NamedRoutes.MainPage,
            component: TbMainPage,
          },
          {
            path: "posts",
            name: NamedRoutes.PostsPage,
            component: TbPostsPage,
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
