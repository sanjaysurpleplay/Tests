import { StyleSheet, Dimensions } from 'react-native';

import { FONT_SIZE_12, FONT_SIZE_20,FONT_WEIGHT_BOLD, FONT_SIZE_14, FONT_FAMILY_PT_REGULAR, FONT_BOLD_PT, FONT_FAMILY_PT_BOLD, FONT_WEIGHT_REGULAR } from '../../utils/styles/Typography';

const { height } = Dimensions.get('window');
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        marginRight:5,
        margin:5,
        marginBottom:-5,
        padding:0,
        backgroundColor:'white'
    },
    container: {
        flex:1, 
        flexDirection:'row',
        justifyContent:'center',  
        margin:5,
        marginTop:0,
        marginBottom:0
    },
    imageContainer: {
       flex:1,
          flexDirection:'row',
         justifyContent:'space-between',   
        },
    textContainer: { 
            flex:1,
            flexDirection:'row',
             justifyContent:'flex-end',
            // alignContent:'flex-end',  
        },
    nameText: {
            fontSize:13,
            fontWeight: FONT_WEIGHT_BOLD,
            fontFamily:FONT_FAMILY_PT_BOLD,
            color:'#4d4f5c',
            marginTop:3
           },
    titleText: {
            fontSize:12,
            fontWeight: FONT_WEIGHT_REGULAR,
            fontFamily:FONT_FAMILY_PT_REGULAR,
            color:'#43425d',
            marginTop:3
           },
     sepratorLine:{
            height:3,
            width:3,
            backgroundColor: '#4bbc00',
            marginLeft:0,
            marginRight:0,
            marginTop:5,
            
        },
});


export default styles;