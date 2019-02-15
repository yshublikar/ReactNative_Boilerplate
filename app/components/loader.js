import React, {Component} from 'react';
import {View, ActivityIndicator,StyleSheet} from 'react-native';


class Laoder extends Component{
  render(){
    return(
      <View style={style.overlay}>
        <View style={[style.container, style.loading]}>
           <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay:{
    backgroundColor: 'transparent',
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 1,
    paddingLeft: '50%',
    paddingTop: '50%',
    width: '100%',
    height: '100%'
   }
})
export default Laoder;
