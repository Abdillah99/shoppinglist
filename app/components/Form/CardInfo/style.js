import { StyleSheet } from 'react-native';
import Theme  from '../../../styles/theme';

export default StyleSheet.create({
    container:{
        flex: 1, 
        padding: Theme.MAIN_CONTAINER_PADDING, 
        backgroundColor: Theme.WHITE,
        justifyContent:'space-between',
    },
    closeButton:{
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'flex-end',
    },
    closeIcon:{
        width: 20, 
        height: 20 
    },
    formContainer:{
        flex:3,
        marginVertical:6,
    },
    headingText:{
        fontFamily:Theme.FONT_BOLD,
        fontSize: Theme.FONT_SIZE_LARGE,
        color:'rgb(48, 50, 52)',
    },
    textInput:{
        alignSelf: 'stretch',
        padding:7,
        fontFamily:Theme.FONT_BOLD
    },
    shareTextContainer:{
        flex:7
    },
    shareButtonContainer:{
        flex:3, justifyContent: 'center', alignItems: 'center',
    },
    shareButton:{
        backgroundColor: Theme.Light.PRIMARY_CREAM,
        alignItems:'center',
        width:60,
        height:60,
        borderRadius:50, 
        justifyContent: 'center',
    },
    userList:{
        flex:6
    },

});