import { StyleSheet } from 'react-native';

import Theme from '../../../styles/theme';
import theme from '../../../styles/theme';

export default StyleSheet.create({
    cardItem: {
        alignSelf: 'stretch',
        height: Math.round( Theme.DEVICE_HEIGHT / 6 ),
        backgroundColor: Theme.Light.PRIMARY_CREAM,
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal:12,
        marginVertical:6,
        marginHorizontal:12,
    },

    cardTittleText: {
        color: Theme.TEXT,
        fontFamily: Theme.FONT_BOLD,
        fontSize:Theme.FONT_SIZE_MEDIUM,
    },
    tagsText:{
        color: Theme.TEXT,
        fontFamily:Theme.FONT_REGULAR,
        fontSize:theme.FONT_SIZE_SMALL,
    },
    progressBarContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressBar: {
        flex: 9,
        flexDirection: 'row',
        margin: 2,
        backgroundColor:'#fff',
    },
    barActive: {
        height: 4,
        backgroundColor: 'rgb(255, 217, 118)',
    },
    barDeactive: {
        height: 4,
        backgroundColor: Theme.WHITE,
    },
    progressBarTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },

    swipeRightContainer:{
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 90, 
        paddingHorizontal: 12 
    },

    swipeButton:{
        flex:1,
    },
    swipeIcon:{
        width: 16, 
        height: 16
    },

});