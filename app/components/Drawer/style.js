import { StyleSheet } from 'react-native';

import Theme from '../../styles/theme';

export default StyleSheet.create({

    container:{
        flex:1,
        padding:10, 
        flexDirection:'column',
    },
    signInContainer:{
        flex:2,
        flexDirection:'row',
    },
    signInImage:{
        flex:2, 
        justifyContent:'flex-start',
    },
    signInIcon:{
        width:30, 
        height:30
    },
    signInButton:{
        flex: 8, 
        justifyContent: 'flex-start'
    },
    
    menuContainer:{
        flex: 7
    },
    footer:{
        flex: 1, 
        justifyContent: 'flex-end', 
    },
    labelText:{
        color: Theme.Light.TEXT,
        fontFamily:Theme.FONT_BOLD,
        fontSize: Theme.FONT_SIZE_LARGE,
    },

});