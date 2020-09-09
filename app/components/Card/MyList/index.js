
import React, { memo } from 'react';
import propTypes from 'prop-types';

import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import styles from './style';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import EditDelete from '@components/Button/EditDelete';

const Card = ({index,data, onPress,onDelete, onEdit}) => {
	
	const {id,title,  task, tags, completed } = data;

	const progressBar = completed / task * 1;
	
	const _onPress = ()=>{
		var param ={
			index:index,
			id:id,
			behavior:'detail'
		}
		onPress(param);
	}

	const _onEdit = () =>{
		var param ={
			id:id,
			behavior: 'edit'
		}
		onEdit(param);
	}

	const _onDelete = () =>{
		onDelete(id);
	}

	const _renderRightAction = () =>{
		return(
			<EditDelete
				onEdit={_onEdit}
				onDelete={_onDelete} 
			/>
		)
	}

	return ( 
		<Swipeable renderRightActions={_renderRightAction} >
			<TouchableNativeFeedback onPress={_onPress}>
				<View style={styles.cardItem}>
					<Text style={styles.cardTittleText}>{title}</Text>
					<Text style={styles.tagsText}> {tags}</Text>
					<View style={styles.progressBarContainer}>
						<View style={styles.progressBar}>
							<View style={[styles.barActive, { flex: progressBar ? progressBar : 0 }]} />
						</View>
						<View style={styles.progressBarTextContainer}>
							<Text>{completed + "/" + task}</Text>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
		</Swipeable>
	);
}

Card.propTypes={
	data:propTypes.object.isRequired,
	onPress:propTypes.func,
	onEdit:propTypes.func,
	onDelete:propTypes.func,
}

export {Card};

