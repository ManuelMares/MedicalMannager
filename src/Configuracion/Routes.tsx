import Catalogo from '../Components/Catalogo/Catalogo';
import Dashboard from '../Components/Dashboard/Dashboard';
import IniciarSesion from '../Components/IniciarSesion/IniciarSesion';
import Menu from '../Components/Menu/Menu';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import NuevoPaciente from '../Components/NuevoPaciente/NuevoPaciente';
import IRoute from '../Interfaces/Route'

const routes: IRoute[] =[
    {
        path: '/Catalogo',
        name: 'Catalogo',
        component: Catalogo,
        exact: true
    },  
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
        exact: true
    },
    {
        path: '/IniciarSesion',
        name: 'IniciarSesion',
        component: IniciarSesion,
        exact: true
    },
    {
        path: '/NuevoPaciente',
        name: 'NuevoPaciente',
        component: NuevoPaciente,
        exact: true
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        exact: true
    },
    {
        path: '/*',
        name: 'NotFoundPage',
        component: NotFoundPage,
        exact: true
    }
]

export default routes;