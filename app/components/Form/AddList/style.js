import { StyleSheet } from 'react-native';
import Theme  from '../../../styles/theme';

export default StyleSheet.create({
	formListContainer: {
		height: Theme.DEVICE_HEIGHT / 3,
		backgroundColor: Theme.WHITE,
		padding:4,
		elevation:5,  
	},
	textInputContainer: {
		flexDirection: 'row'
	},
	textInputName:{
		flex: 6, 
		borderBottomWidth: 1, 
		margin: 4,
	},
	nameTextInput:{
		fontFamily:Theme.FONT_REGULAR
	},
	textInputQty:{
		flex: 4, 
		borderBottomWidth: 1, 
		margin: 4,  
		flexDirection: 'row',
	},
	buttonContainer:{
		flex: 2,
		alignItems:'center',
		justifyContent: 'center',
	},
	buttonUnit: {
		width: 50,
		borderWidth: 1,
		alignItems: 'center',
		margin: 4,
		borderColor: 'rgb(238,238,238)',
	},
	unitQtyContainer:{
		flex: 8, flexDirection: 'row', alignItems: 'center'
	},
	qtyTextInput:{
		flex: 2, 
		fontFamily: Theme.FONT_BOLD
	},
	unitText:{
		flex: 3,
		fontFamily:Theme.FONT_REGULAR,
	},
	buttonUnitContainer:{
		flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',
	},
	buttonUnitSelected: {
		width: 50,
		borderWidth: 1,
		alignItems: 'center',
		margin: 4,
		borderColor: 'rgb(238,238,238)',
		backgroundColor: Theme.Light.PRIMARY_YELLOW,
	},
	buttonUnitText:{
		fontFamily:Theme.FONT_REGULAR
	},
	buttonIcon: {
		width: 20,
		height: 20
	},

	buttonAdd: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		backgroundColor: 'rgb(255, 217, 118)',
		padding: 20,
		margin: 6,
		borderRadius: 100,
		zIndex: 1,
	},
});