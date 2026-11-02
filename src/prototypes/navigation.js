// Demo prototype for OZLAB-5: Реализовать меню и навигацию
export const routes = [
  { path: '/', label: 'Главная' },
  { path: '/products', label: 'Препараты' },
  { path: '/news', label: 'Новости' },
];
export const findRoute = path => routes.find(route => route.path === path);
