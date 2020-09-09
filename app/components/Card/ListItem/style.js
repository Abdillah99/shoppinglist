import { StyleSheet, Dimensions } from 'react-native';
import Theme from '@styles/theme';

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    strikeLine:{
        position:'absolute',
        backgroundColor:'black',  
        height:1,
        zIndex:2,
        left:0,
        right:0,
    }, 
    cardItemNameText:{
        width:'75%',
        fontFamily:Theme.FONT_REGULAR,
        fontSize:Theme.FONT_SIZE_MEDIUM,
    },
    cardUnitContainer:{
        width:'25%',
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
    },
    cardItemQtyText:{
        fontFamily:Theme.FONT_BOLD,
        fontSize: Theme.FONT_SIZE_MEDIUM,
    },
    cardItemUnitText:{
        fontFamily:Theme.FONT_REGULAR,
        fontSize:Theme.FONT_SIZE_MEDIUM,
    },
    swipeContainer:{
        height:height/12,
        justifyContent:'center'
    },

});