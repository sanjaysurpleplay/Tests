import { StyleSheet, Dimensions } from 'react-native';
import {FONT_WEIGHT_BOLD,FONT_WEIGHT_REGULAR } from '../../utils/styles/Typography';

const { height } = Dimensions.get('window');
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainContainer: { 
        backgroundColor:'#f3f2f2'
    },
    container: {
        justifyContent:'center',  
        margin:0,
        marginTop:0,
        marginBottom:0,
    },
    image: {
        width: screenWidth-10, 
        height:200, 
        resizeMode:'stretch', 
        margin: 5
        },
    textContainer: { 
        marginTop:10, 
        marginLeft:10,
        flexDirection:'row'
        },
    titleText: {
        fontSize:15,
        fontWeight: FONT_WEIGHT_BOLD,
        color:'#427FC4',
        },
    nameText: {
        fontSize:15,
        fontWeight: FONT_WEIGHT_REGULAR,
        color:'#427FC4',
        marginTop:2,
        marginLeft:5,
        marginRight:10
        },
});

export default styles;