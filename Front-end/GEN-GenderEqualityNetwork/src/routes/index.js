import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import LoginRoutes from "./login.routes";
import TabRoutes from './tab.routes';

export default function Routes() {
    return(
        <NavigationContainer>
            <LoginRoutes />
        </NavigationContainer>

    )
}