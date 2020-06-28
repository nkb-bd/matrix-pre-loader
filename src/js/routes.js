import Dashboard from './Components/Dashboard';
import Extra from './Components/Extra';

export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/extra',
        name: 'extra',
        component: Extra
    }
  
];
