import Dashboard from './Components/Dashboard';
import Extra from './Components/Extra';
import SupportContact from './Components/SupportContact'
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
    },
    {
        path: '/support',
        name: 'support',
        component: SupportContact
    },

  
];
