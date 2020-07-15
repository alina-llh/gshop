import Home from "@/pages/Home"
import Login from '@/pages/Login'
import Register from "@/pages/Register"
import Search from '@/pages/Search'
export default [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/search/:keywrod?",
    component: Search,
    name: "Search",
    props: route => ({
      keywrod: route.params.keywrod,
      keywrod1: route.query.keywrod1
    })
  },
]