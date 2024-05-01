import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AuthContext} from "../context";
import DefaultLoader from "./UI/loader/DefaultLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <DefaultLoader/>;
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )}
                />
            </Routes>
    );
};

export default AppRouter;