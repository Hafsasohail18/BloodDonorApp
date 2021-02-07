import React, {Component} from 'react';
import { Router, Scene,Stack } from 'react-native-router-flux';

import Login from './android/app/Components/login';
import Regform from './android/app/Components/regform';
export default function Routes() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={Login} title="Login" />
                <Scene key="register" component={Regform} title="Registeration"/>
                
            </Stack>
        </Router>

    );
}