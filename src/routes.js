import portfolio from './portfolio/Portfolio';
import stocks from './stocks/Stocks';
import home from './Home';
export const routes = [
    {  path: '/', component: home },
    {  path: '/portfolio', component: portfolio },
    {  path: '/stocks', component: stocks },
];