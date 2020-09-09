import React, { Component,useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	Image,
	Alert,
	TouchableOpacity,
} from 'react-native';

import styles from './style';

import { Card } from '@components/Card/MyList';
import { Header } from '@components/Header';
import { useListState, useListAction } from '@modules/context/List';

const filterType ={
	OLDEST : 'OLDEST',
	RECENT: 'RECENT',
	ALPHABET : 'ALPHABET',
	TAGGED: 'TAGGED',
	UNTAGGED: 'UNTAGGED',
}

const MyList = (props) => {
	const state = useListState();
	const action = useListAction();

	useEffect(() => {

	},[])

	const _onSearch = (text) => {
		const newData = state.cards.filter(item => {
			const itemData = item.title.toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});
	}

	const _onChangeFilter = (type)=>{

	}

	const gotoDetail = (param) =>{
		requestAnimationFrame(()=>{
			props.navigation.navigate('ListDetail', {
				index:param.index,
				id: param.id,
				behavior: param.behavior,
			});
		})
	}

	const gotoCreate = () =>{
		requestAnimationFrame(()=>{
			props.navigation.navigate('CreateList');
		})
	}

	const deleteCards = (id) => {
		Alert.alert(
			"Confirmation action",
			"Are you sure to delete this card ?",
			[
			  {
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			  },
			  { text: "OK", onPress: () =>{
					action.deleteCard(id); 
				}
			   }
			],
			{ cancelable: true }
		  );
	}
	
	// UI Logic 
	const _toggleDrawer = () => props.navigation.toggleDrawer();
	
	const _renderItem = ({ item,index }) => {
		return (
			<Card
				index={index}
				data={item}
				onEdit={gotoDetail}
				onDelete={deleteCards}
				onPress={gotoDetail}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={state.cards}
				keyExtractor={(item, index) => item.id.toString()}
				renderItem={_renderItem}
				ListEmptyComponent={
					<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
						<Text style={styles.emptyMsg}>
							you not have any list
						</Text>
					</View>
				}
				ListHeaderComponent={
					<Header
						onSearch={_onSearch}
						toggleDrawer={_toggleDrawer}
						onChangeFilter={_onChangeFilter}
						filterType={filterType}
					/>
				}
			/>
			<TouchableOpacity onPress={gotoCreate} style={styles.buttonAdd}>
				<Image source={require('@assets/icon/plus.png')} 
					style={{ width: 20, height: 20 }} />
			</TouchableOpacity>
		</View>
	);

}
export default MyList;