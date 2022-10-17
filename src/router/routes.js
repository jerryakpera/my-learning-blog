const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          title: "Home",
        },
      },
      {
        path: "post/:slug",
        component: () => import("pages/Post.vue"),
        props: true,
        meta: {
          title: "Post",
        },
      },
      {
        path: "categories/:slug",
        component: () => import("pages/CategoriesBlog.vue"),
        props: true,
        meta: {
          title: "Category",
        },
      },
      {
        path: "blog",
        component: () => import("pages/Blog.vue"),
        meta: {
          title: "Blog",
        },
      },
      {
        path: "about",
        component: () => import("pages/About.vue"),
        meta: {
          title: "About",
        },
      },

      {
        path: "contact",
        component: () => import("pages/Contact.vue"),
        meta: {
          title: "Contact",
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
