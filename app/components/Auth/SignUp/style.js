import { StyleSheet } from 'react-native';
import Theme  from '../../../styles/theme';

export default StyleSheet.create({
    container:{
        flex: 1, 
        padding: Theme.MAIN_CONTAINER_PADDING, 
        backgroundColor: Theme.Light.BG_WHITE,
    },

    formContainer:{
        flex:1,
    },  
    textInput:{
        alignSelf: 'stretch',
        fontFamily: Theme.FONT_REGULAR
    },
    btnContainer:{
        flex: 1, 
        flexDirection:'column',
    },
    btnSignUpContainer:{
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent: 'center', 
    },
    signUpLabel:{
        fontFamily:Theme.FONT_BOLD,
        fontSize:Theme.FONT_SIZE_MEDIUM,
        color:Theme.Light.TEXT,
        marginHorizontal:12,
    },
    btnSignUp:{
        width:50, 
        height:50, 
        borderRadius: 100, 
        backgroundColor: Theme.Light.PRIMARY_YELLOW, 
        justifyContent: 'center',
        alignItems:'center',
    },
    btnIcon:{
        width:18,
        height:18,
    },
    btnAppleIdContainer:{
        flex:1,
        flexDirection:'column', 
        justifyContent: 'flex-end',
    },
    btnApple:{
        alignSelf:'stretch',
        alignItems:'center',
        backgroundColor: Theme.Light.RED,
        padding:12,
        marginHorizontal:12
    }

});

export const color = {
    btnAppleColor:Theme.Light.PRIMARY_CREAM,
}