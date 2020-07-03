import createRouter, { Route } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { Component, createEffect } from 'solid-js';
import { Tree } from './examples/Tree';
import { routes } from './examples/routes';
import { RouterProvider } from '@zxlib/solid-router5';

export const App: Component = () => {
  const router = createRouter(routes);
  router.usePlugin(browserPlugin());
  router.start();

  return (
    <RouterProvider router={router}>
      <Tree />
    </RouterProvider>
  );
};
