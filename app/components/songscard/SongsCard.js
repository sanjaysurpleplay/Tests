import React, { Component } from 'react';
import {
    SafeAreaView,
    Body,
    Card,
    CardItem,
    Icon,
    Text,
    View,
    Segment,
    Container,
    Button,
    Content,
  } from 'native-base';
  import {TouchableOpacity,Image, Dimensions} from 'react-native';
  import styles from './SongsCard.style';
  import { withNavigation } from 'react-navigation';
import { system } from 'styled-system';
const {width, heigth} = Dimensions.get('window');

  class SongsCard extends Component {
    constructor(props) {
        super(props);
      }

      goToDetailScreen() {
        this.props.navigation.navigate('SongsDetailsScreen',this.props.songs);  
      }

      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: width,
              backgroundColor: "#DCDCDC",
              marginTop:10
            }}
          />
        );
      }
      
      render() { 
        let imageUrl = { uri: this.props.songs.artworkUrl100};
          return (
            <TouchableOpacity style={styles.mainContainer} onPress={() => this.goToDetailScreen()} >
               {this.FlatListItemSeparator()}
                       <View style= {styles.container}>
                          <View style={styles.imageContainer}>
                             <Image
                                source={imageUrl}
                                style={styles.image}
                             />
                          </View>
                          <View style={styles.textContainer}>
                            <View style={{flexDirection:'column', justifyContent:'flex-start', marginRight:10}}>
                               <Text style={styles.nameText}>{this.props.songs.trackCensoredName}</Text>
                               <View style={{flex:1, flexDirection:'row',marginTop:10}}>
                                 <View>
                                   <Text style={styles.nameText}>Artist Name</Text>
                                 </View>
                                 <View>
                                   <Text style={styles.titleText}>{this.props.songs.artistName}</Text>
                                 </View>
                               </View>
                            </View>
                          </View>
                          
                       </View>     
            </TouchableOpacity>
           
          );
      }
  }

  export default withNavigation (SongsCard);
