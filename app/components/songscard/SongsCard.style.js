import { StyleSheet, Dimensions } from 'react-native';
import { justifyContent, marginLeft } from 'styled-system';

import { FONT_SIZE_12, FONT_SIZE_20,FONT_WEIGHT_BOLD, FONT_SIZE_14, FONT_FAMILY_PT_REGULAR, FONT_BOLD_PT, FONT_FAMILY_PT_BOLD, FONT_WEIGHT_REGULAR } from '../../utils/styles/Typography';

const {width, heigth} = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#f3f2f2',
        width: width,
        height:heigth,
        justifyContent:'space-evenly'
    },
    container: {
        width:width,
        flexDirection:'row',
        justifyContent:'space-between', 
        backgroundColor:'#f3f2f2'
    },
    imageContainer: {
        flexDirection:'row', 
        justifyContent:'flex-start',
        marginLeft:0, 
        marginRight:10,
        marginTop:10,
        marginLeft:5
        },
    image: {
        width:100, 
        height:100, 
        resizeMode: 'stretch', 
        margin: 0
        },
    textContainer: { 
        flexDirection:'row',
        justifyContent:'flex-end',
        marginLeft:5, 
        marginTop:20, 
        marginRight:10
        },
    nameText: {
        fontSize:16,
        fontWeight: '700',
        color:'#427FC4',
        marginTop:2,
        marginLeft:0,
        marginRight:20,
        textAlign: 'left', 
        alignItems: 'baseline',
        flexWrap: 'wrap',
        lineHeight: 18,
        flexDirection: 'row',
        },
    titleText: {
        fontSize:12,   
        color:'#427FC4',
        marginTop:5
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