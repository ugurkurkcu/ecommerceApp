import BestSeller from './bestSeller';
import Introduction from './introduction';
import NewArrival from './newArrival';

const widget = [
  {
    id: 1,
    name: 'introduction',
    component: <Introduction />,
    isShown: true,
    title: null,
  },
  {
    id: 2,
    name: 'newArrival',
    component: <NewArrival />,
    isShown: true,
    title: 'New Arrival',
  },
  {
    id: 3,
    name: 'bestSeller',
    component: <BestSeller />,
    isShown: true,
    title: 'Best Seller',
  },
];

export default widget;
