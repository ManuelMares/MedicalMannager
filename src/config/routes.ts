import { Catalogo } from '../Components/Catalogo/Catalogo';
import { Dashboard } from '../Components/Dashboard/Dashboard';
import { IniciarSesion } from '../Components/IniciarSesion/IniciarSesion';
import { NotFoundPage } from '../Components/NotFoundPage/NotFoundPage';
import IRoute from './Interfaces/route';
import IPage from './Interfaces/page'; 

const routes: IRoute[] = [
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard,
        exact: true
    },
    {
        path: '/Catalogo',
        name: 'Catalogo',
        component: Catalogo,
        exact: true
    },
    {
        path: '/IniciarSesion',
        name: 'IniciarSesion',
        component: IniciarSesion,
        exact: true
    },
    {
        path: '*',
        name: '',
        component: NotFoundPage,
        exact: false
    }
]

export default routes;

//<Redirect from="/" to="/Dashboard" />