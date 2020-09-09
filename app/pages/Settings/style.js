import { StyleSheet } from 'react-native';
import Theme  from '../../styles/theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.WHITE,
        padding: Theme.MAIN_CONTAINER_PADDING,
      },
      headingContainer:{
        flex:1,
      },
     headingText:{
         fontSize: Theme.FONT_SIZE_XLARGE,
        fontFamily: Theme.FONT_BOLD,
     },
     settingsContainer:{
        flex:6,
     },
     toggleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        borderBottomWidth:1,
        borderColor:'rgb(238,238,238)'
     },
     toggleLabel:{
        fontFamily:Theme.FONT_REGULAR,
        fontSize:Theme.FONT_SIZE_SMALL,
        color: Theme.Light.TEXT
     }, 


     
});

export const trackColor = {
    true: Theme.Light.PRIMARY_YELLOW,
    false: 'rgb(238,238,238)',
}