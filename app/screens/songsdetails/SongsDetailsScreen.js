import React, { Component } from 'react';
import {
  Text,
  Container,
  View
} from 'native-base';
import { 
  Dimensions,
  Image} from 'react-native';
import moment from 'moment';
import styles from './SongsDetails.style';
const screenWidth = Dimensions.get("window").width;

class SongsDetailsScreen extends Component {
    
    constructor(props) {
      super(props);
  }
  
  render() {    
    let imageUrl = { uri: this.props.navigation.state.params.artworkUrl100}
      return (
        <Container style={styles.mainContainer}>
           <View style={styles.container}>
           <Image
              source={imageUrl}
              style={styles.image}
             />
             <View style={styles.textContainer}>
                <Text style={styles.titleText}>Track Name:  </Text> 
                <Text style={styles.nameText}>{this.props.navigation.state.params.trackName}</Text>
                <Text style={{marginLeft:10,fontSize:15,fontWeight: '700',color:'#427FC4'}}>Track Time:  </Text> 
                <Text style={styles.nameText}>{moment(this.props.navigation.state.params.trackTimeMillis).seconds(15457).format('mm')}m</Text>
             </View>

             <View style={styles.textContainer}>
                <Text style={styles.titleText}>Artist Name:  </Text> 
                <Text style={styles.nameText}>{this.props.navigation.state.params.artistName}</Text>
             </View>

             <View style={styles.textContainer}>
                <Text style={styles.titleText}>Collection Name:  </Text> 
                <Text style={styles.nameText}>{this.props.navigation.state.params.collectionName}</Text>
             </View>

             <View style={styles.textContainer}>
                <Text style={styles.titleText}>Collection Price:  </Text> 
                <Text style={styles.nameText}>{this.props.navigation.state.params.collectionPrice} {this.props.navigation.state.params.currency}</Text>
             </View>

             <View style={styles.textContainer}>
                <Text style={styles.titleText}>Release Date:  </Text> 
                <Text style={styles.nameText}>{moment(this.props.navigation.state.params.releaseDate).format('MMM DD, YYYY  hh:mm A')}</Text>
             </View>

             <View style={styles.textContainer}>
                <Text style={styles.titleText}>Primary General Name:  </Text> 
                <Text style={styles.nameText}>{this.props.navigation.state.params.primaryGenreName}</Text>
             </View>
           </View>
            </Container>
      );
  }
}
export default SongsDetailsScreen ;