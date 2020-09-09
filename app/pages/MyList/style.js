import { StyleSheet } from 'react-native';
import Theme  from '../../styles/theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.Light.PRIMARY_YELLOW,
      },
      buttonAdd:{
        position: 'absolute', 
        right: 0, 
        bottom: 0, 
        backgroundColor: Theme.Light.PRIMARY_CREAM, 
        padding: 20, 
        margin: 6, 
        borderRadius: 100
      },
      emptyMsg:{
          fontSize:Theme.FONT_SIZE_MEDIUM,
          fontFamily:Theme.FONT_REGULAR
      },
});