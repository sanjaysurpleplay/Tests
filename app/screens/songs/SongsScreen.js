import React, { Component } from 'react';
import {
  Card,
  Button,
  Input,
  Text,
  Icon,
  Picker,
  CardItem,
  Body,
  Container,
  Content
} from 'native-base';
import { 
  SafeAreaView, 
  ScrollView,
  Dimensions,
  ImageBackground, 
  RefreshControl, 
  FlatList, 
  TouchableOpacity,
  Image} from 'react-native';

import styles from './Songs.style';
import SongsCard from '../../components/songscard/SongsCard';


class SongsScreen extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
          isRefreshing: false,
        };
  }
  
  componentDidMount() {
        this.props.getSongsLists(true);
  }
  static getDerivedStateFromProps = (nextProps, prevState) => {

    if (nextProps.songsData != 0 && prevState.isRefreshing) {
        return {
            isRefreshing: false,
        }
    }
    if (nextProps.error) {
        return {
            error: nextProps.error
        }
    }
    return null;
  }
  onRefresh = () => {
    this.props.getSongsLists(false);
      this.setState({
        isRefreshing: true,
      });
  }
  _renderCard = () => {
        return (
          this.props.songsData &&   
          this.props.songsData ? 
          < FlatList
            data = { this.props.songsData} extraData = {this.state} 
            refreshControl = { <RefreshControl refreshing = { this.state.isRefreshing } onRefresh = { this.onRefresh.bind(this) } />} 
            renderItem = { ({ item }) => ( < SongsCard  songs = {  item } />) } 
            keyExtractor = { (item, index) => index.toString() }  /> 
            :  <Text></Text>
        );
    }
  render() {
      return (
        <SafeAreaView style={{backgroundColor:'#f3f2f2'}}>
           {this._renderCard()}
            </SafeAreaView>
      );
  }
}

export default SongsScreen ;