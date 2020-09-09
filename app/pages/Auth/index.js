import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import signin from '@components/Auth/SignIn';
import SignUp from '@components/Auth/SignUp';

const initialLayout = { width: Dimensions.get('window').width };

export default function Auth() {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'signin', title: 'SignIn' },
		{ key: 'signUp', title: 'SignUp' },
	]);

	const renderScene = SceneMap({
		signin: signin,
		signUp: SignUp,
	});

	const renderTabBar = props => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: 'rgb(255,225,148)' }}
			style={{marginHorizontal:20,elevation:0, backgroundColor: '#fff', }}
			labelStyle={{color:'#000'}}
	 	/>
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={renderTabBar}
			style={{backgroundColor: '#fff',}}
		/>
	);
}
