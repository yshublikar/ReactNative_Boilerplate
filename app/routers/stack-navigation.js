import React, { Component } from "react";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import { AsyncStorage } from 'react-native';

import Loader from '@components/loader';
import Login from '@screens/login';
import SignUp from '@screens/signUp';
import ForgotPassword from '@screens/forgotPassword';
import Home from '@screens/home';


class Logout extends React.Component {
    constructor(props) {
        super(props)
        this._signOut();
    }
    _signOut = () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    render() {
        return (
            <Loader />
        );
    }
}
//Before SignIn

const AuthStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: ({ navigation }) => ({
            header: null
          })
  },
  SignUp: { screen: SignUp, navigationOptions: ({ navigation }) => ({
            header: null
          })
  },
  ForgotPassword: { screen: ForgotPassword, navigationOptions: ({ navigation }) => ({
            header: null
          })
  },
});

// After SignIn Stack
const StackNav = createStackNavigator({

  Home: {screen: Home, navigationOptions: ({ navigation }) => ({
    header: null
  })},

  Logout: { screen: Logout, navigationOptions: ({ navigation }) => ({
    header: null
  })}

});

class AuthLoadingScreen extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
          user:null,
        }
        this._bootstrapAsync();
  }

  _bootstrapAsync = () => {
    // var scope = this;
    //  AsyncStorage.getItem('userDeatils').then((details)=> {
    //    if(details){
    //      let data = JSON.parse(details);
    //      var url = `secure/users/${data._id}?access_token=${data.token}`;
    //      httpServices.get(url).then((response) =>{
    //        if(response.status === 200){
    //              response.data.token = data.token;
    //              response.data.profileImageUrl = response.data.profileImageUrl? apiURL + response.data.profileImageUrl : apiURL + 'uploads/user_profile/no_profile.png'
    //              AsyncStorage.setItem('userDeatils',JSON.stringify(response.data));
    //        }
    //         scope.props.navigation.navigate('App');
    //      })
    //    }else{
    //        scope.props.navigation.navigate('Auth');
    //    }
    //  })
  }
  render() {
    return (
        <Loader />
    );
  }
}


const SwitchStackNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: StackNav,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer = createAppContainer(SwitchStackNavigator);


export default AppContainer;
