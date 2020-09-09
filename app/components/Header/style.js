import { StyleSheet } from 'react-native';
import Theme from '@styles/Main';

export default StyleSheet.create({
    headerContainer: {
        height:Theme.DEVICE_HEIGHT /8,
        alignSelf: 'stretch',
        backgroundColor: Theme.Light.PRIMARY_YELLOW,
        paddingHorizontal:Theme.MAIN_CONTAINER_PADDING,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:12,
    },
    headerLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenter: {
        flex: 8,
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent:'center',
    },
    headerRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSearch: {
        width: 20,
        height: 20,
    },
    overlay:{
        backgroundColor: '#000',
    },
    pickerContainer:{
        alignSelf:'stretch',
        fontFamily:Theme.FONT_REGULAR,
    },
    dropDown:{
        backgroundColor: Theme.Light.PRIMARY_YELLOW,
        fontFamily: Theme.FONT_REGULAR,
        fontWeight:'400',
    }
});