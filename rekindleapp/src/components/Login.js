//Logs a user in and sends back the corresponding data

import React, { Component } from 'react';

import {  View } from 'react-native';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

LoginManager.logInWithPermissions(["public_profile"]).then(
    function(result) {
        if (result.isCancelled) {
            console.log("Login cancelled");
        } else {
            console.log(
                "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
        }
    },
    function(error) {
        console.log("Login fail with error: " + error);
    }
)

export default class LoginComp extends Component {

    constructor(props) {
        super(props);
        this.state={

        };
        this.handleUserDataResponse = this.handleUserDataResponse.bind(this);
        this.responseInfoCallback = this.responseInfoCallback.bind(this);
        this.handleLoginComplete = this.handleLoginComplete.bind(this);

    }

    handleLoginComplete(token) {
        const infoRequest = new GraphRequest(
            '/me',
            null,
            this.responseInfoCallback,
        );
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    responseInfoCallback(error, result) {
        if (error) {
            console.warn('Error fetching data: ' + error.toString());
        } else {
            console.warn('Success fetching data: ' + JSON.stringify(result).toString());
            this.handleUserDataResponse(result)
        }
    }

    handleUserDataResponse(result) {
        let userData = this.getUserData(result.id);
        this.props.parentReference(userData);
    }

    getUserData(id) {
        //since we don't have a database here we go!
        switch (id) {
            case '2684866978225110':
                return require('../../assets/userData/2684866978225110.json');
            case '2559221700767822':
                return require('../../assets/userData/2559221700767822.json');
            case '2984866978225110':
                return require('../../assets/userData/2984866978225110.json');
            default:
                return require('../../assets/userData/2559221700767822.json');
        }
    }


    render() {
        return (
            <View>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        this.handleLoginComplete(data.accessToken)
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")}/>
            </View>

        );
    }
}

