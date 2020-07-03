import { Route } from 'router5';

export const routes: Route[] = [
  { name: 'index', path: '/' },
  { name: 'route1', path: '/route1' },
  { name: 'route2', path: '/route2' },
  {
    name: 'children',
    path: '/children',
    children: [
      { name: 'index', path: '/' },
      { name: 'route1', path: '/route1' },
      { name: 'route2', path: '/route2' },
      {
        name: 'children',
        path: '/children',
        children: [
          { name: 'index', path: '/' },
          { name: 'route1', path: '/route1' },
          { name: 'route2', path: '/route2' },
          {
            name: 'children',
            path: '/children',
            children: [
              { name: 'index', path: '/' },
              { name: 'route1', path: '/route1' },
              { name: 'route2', path: '/route2' },
            ],
          },
        ],
      },
    ],
  },
];
