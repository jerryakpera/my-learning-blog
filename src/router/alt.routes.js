const routes = [
  {
    path: "/",
    component: () => import("layouts/AltLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          title: "Home",
        },
      },
      {
        path: "post/:slug",
        name: "Post",
        component: () => import("pages/Post.vue"),
        props: true,
        meta: {
          title: "Post",
        },
      },
      {
        path: "categories/:slug",
        name: "Categories",
        component: () => import("pages/CategoriesBlog.vue"),
        props: true,
        meta: {
          title: "Category",
        },
      },
      {
        path: "blog",
        name: "Blog",
        component: () => import("pages/Blog.vue"),
        meta: {
          title: "Blog",
        },
      },
      {
        path: "about",
        name: "About",
        component: () => import("pages/About.vue"),
        meta: {
          title: "About",
        },
      },
      {
        path: "books",
        name: "Books",
        component: () => import("pages/BooksPage.vue"),
        meta: {
          title: "Books",
        },
      },

      {
        path: "contact",
        name: "Contact Me",
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
