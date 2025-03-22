
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/home";
import Detalhes from "./pages/detalhes/detalhes";
import Fofa from "./pages/fofa/fofa";
import Layout from "./components/layout/layout";
import Notfound from "./pages/notfound/notfound";
import Musicas from "./pages/musicas/musicas";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/detalhes",
        element: <Detalhes/>
      },
      {
        path: "/fofa",
        element: <Fofa/>
      },
      {
        path: '/musicas',
        element: <Musicas/>
      },
      {
        path: '*',
        element: <Notfound/>
      },
     
        ]
    }
])

export {router};