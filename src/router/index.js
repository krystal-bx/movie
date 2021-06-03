import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import About from "@/pages/AboutUs";
import Executives from "@/pages/Bio";
import Projects from "@/pages/Projects";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/ContactUs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Executives",
      name: "Executive Biography",
      component: Executives
    },
    {
      path: "/Projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/Portfolio",
      name: "Portfolio",
      component: Portfolio
    },
    {
      path: "/Contact",
      name: "Contact Us",
      component: Contact
    }
  ]
});
