import { Component, createEffect } from 'solid-js';
import { useRouter, Link, ShowRoute } from '@zxlib/solid-router5';

const NavLink: typeof Link = (props) => (
  <Link
    {...(props as any)}
    classList={{
      'navbar-item': true,
      'is-tab': true,
      'is-active': useRouter().isActive(props.name, props.full),
    }}
  />
);

const Navbar: Component = () => {
  return (
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          {/* <NavLink href="/">Index</NavLink>
          <NavLink href="/route1">Route1</NavLink>
          <NavLink href="/route2">Route2</NavLink>
          <NavLink href="/no-route">No route</NavLink>
          <NavLink href="/children">Children</NavLink> */}
          <NavLink name="index">Index</NavLink>
          <NavLink name="route1">Route1</NavLink>
          <NavLink name="route2">Route2</NavLink>
          {/* <NavLink name="no-route">No route</NavLink> */}
          <NavLink name="children">Children</NavLink>
        </div>
      </div>
    </nav>
  );
};

const Routes: Component = (props) => {
  return (
    <>
      <ShowRoute name="index">Index content</ShowRoute>
      <ShowRoute name="route1">Route1 content</ShowRoute>
      <ShowRoute name="route2">Route2 content</ShowRoute>
      <ShowRoute name="children">{props.children}</ShowRoute>
    </>
  );
};

const TreeLevel: Component<{ name: string }> = (props) => {
  console.log(`TreeLevel[${props.name}]`);
  return (
    <div class="panel">
      <p class="panel-heading">{props.name}</p>
      <div class="panel-block">
        <Navbar />
      </div>
      <div class="panel-block">
        <Routes>{props.children}</Routes>
      </div>
    </div>
  );
};

export const Tree: Component = () => {
  const { getRoute } = useRouter();

  createEffect(() => {
    console.log('getRoute(): ', getRoute());
  });

  return (
    <div class="container">
      <TreeLevel name="Root">
        <TreeLevel name="Level 1">
          <TreeLevel name="Level 2">
            <TreeLevel name="Level 3">FIN</TreeLevel>
          </TreeLevel>
        </TreeLevel>
      </TreeLevel>
    </div>
  );
};
