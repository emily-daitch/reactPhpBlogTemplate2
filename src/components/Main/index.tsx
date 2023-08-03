import React , { lazy }from 'react';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../Home'));

export default function Main() {

    return (
        <Home />
    );
}
