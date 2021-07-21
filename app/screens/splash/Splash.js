import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class Splash extends Component {
 constructor(props){
     super(props);
     this.state = {
        isLodaing: true,
      };
 }
 componentDidMount =() => {

    setTimeout(() => { 
      this.setState({
        isLodaing: false
      })   
      }, 5000);
  }

 render() {
    const { isLodaing } = this.state; 
    if (isLodaing == false) {
     this.props.navigation.navigate('Auth')  
    }
     return(
        <View style={styles.container}>
        <Image
          source={require('../../assets/image/logo/logo.png')}
          style={styles.image}
        />
      </View>
     )
 }
}
export default Splash;

const styles = StyleSheet.create({
    container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'#E6F1FC',
        },
    image: {
        width: '90%', 
        height:200, 
        resizeMode: 'contain', 
        margin: 30 
        },
}); 