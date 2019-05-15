import * as React from 'react';
import {
    Redirect,
    Route,
} from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {

    const isAuthenticated = JSON.parse(localStorage.getItem('auth')!);
    return (
        <Route
            {...rest}
            // tslint:disable-next-line:jsx-no-lambda
            render={(props: any) => {
                if (isAuthenticated) {
                    return (<Component {...props} />) // tslint:disable-line

                }
                return (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />)
            }}
        />
    );
}
