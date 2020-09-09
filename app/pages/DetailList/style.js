import { StyleSheet } from 'react-native';
import Theme from '../../styles/theme';

export default StyleSheet.create({
    loadingContainer:{
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: Theme.WHITE,
    },
    container: {
        flex: 1,
        backgroundColor: Theme.WHITE,
        paddingHorizontal: Theme.MAIN_CONTAINER_PADDING,
    },
    titleContainer: {
        flex: 3.5,
        flexDirection: 'row',
    },
    titleText:{
        flex:9,
        fontFamily:Theme.FONT_BOLD,
        fontSize:Theme.FONT_SIZE_XLARGE,
        textAlignVertical:'center',
        justifyContent: 'center',
    },
    settingButton:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    listContainer: {
        flex: 16.5,
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 6,
        marginVertical: 4,
    },
    cardItemNameText:{
        flex: 8,
        fontFamily:Theme.FONT_REGULAR,
        fontSize:Theme.FONT_SIZE_MEDIUM,
    },
    cardUnitContainer:{
        flex: 2, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
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
        borderColor: 'rgb(238,238,238)',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    buttonAdd: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: Theme.Light.PRIMARY_YELLOW,
        elevation: 8,
        padding: 20,
        margin: 6,
        borderRadius: 100,
        zIndex: 1,
    },
    buttonIcon: {
        width: 20,
        height: 20
    },
    
    swipeRightContainer:{
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 90, 
        paddingHorizontal: 12, 
    },

    swipeButton:{
        flex:1,
    },
    swipeIcon:{
        width: 16, 
        height: 16
    },
    overlayButton :{
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: Theme.Light.PRIMARY_YELLOW,
        padding: 20,
        margin: 6,
        borderRadius: 100,
        zIndex: 1,
    }
});