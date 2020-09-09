import styles from './style';

import React, { useState } from 'react';
import {Picker} from '@react-native-community/picker';

import {
	View,
	Text,
	TouchableWithoutFeedback,
	TextInput,
	Image,
} from 'react-native';

const SearchBar = ({ search }) => {
	return (
		<TextInput
			style={{ alignSelf: 'stretch',margin:0,padding:0 }}
			underlineColorAndroid={'#000'}
			onChangeText={search}
			placeholder={'Enter Keywords'} 
		/>
	);
}

const DropDown = ({ setFilter, filterType }) => {
	return (
		<Picker
			selectedValue={filterType}
			style={styles.pickerContainer}
			mode='dropdown'
			itemStyle={styles.dropDown}
			onValueChange={ (itemValue) => setFilter(itemValue)}
		>
			<Picker.Item label="Recent List" value="RECENT" />
			<Picker.Item label="Oldest First" value="OLDEST" />
			<Picker.Item label="A to Z" value="A-Z" />
			<Picker.Item label="Tagged" value="TAGGED" />
			<Picker.Item label="Untagged" value="UNTAGGED" />

		</Picker>
	);
}

export const Header = ({  toggleDrawer, search, filterType, setFilter }) => {
	
    const [searching , setSearching] = useState(false);
	const toggleSearch = () => setSearching(!searching);
	
	var searchClose = searching ? require('@assets/icon/close.png') : require('@assets/icon/search.png');
	return (
	<View style={styles.headerContainer}>
		<View style={styles.headerLeft}>
			<TouchableWithoutFeedback onPress={toggleDrawer}>
				<Image style={styles.iconSearch} source={require('@assets/icon/menu-bar.png')} />
			</TouchableWithoutFeedback>
		</View>
		<View style={styles.headerCenter}>
			{
				searching ? <SearchBar search={search} /> 
							: <DropDown 
								filterType={filterType} 
								setFilter={setFilter} />
			}
		</View>
		<View style={styles.headerRight}>
			<TouchableWithoutFeedback onPress={toggleSearch}>
				<Image
					style={styles.iconSearch}
					source={searchClose} />
			</TouchableWithoutFeedback>
		</View>
	</View>

	);
}

