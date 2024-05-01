import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import {Navigate} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";

export const privateRoutes = [
    {
        path: '/about',
        element: <About/>,
        exact: true
    },
    {
        path: '/posts',
        element: <Posts/>,
        exact: true
    },
    {
        path: '/posts/:id',
        element: <PostIdPage/>,
        exact: true
    },
    {
        path: '/error',
        element: <Error/>,
        exact: true
    },
    {
        path: '*',
        element: <Navigate to='/error'/>,
        exact: true
    }
];

export const publicRoutes = [
    {
        path: '/login',
        element: <Login/>,
        exact: true
    },
    {
        path: '/error',
        element: <Error/>,
        exact: true
    },
    {
        path: '*',
        element: <Navigate to='/login'/>,
        exact: true
    }
];