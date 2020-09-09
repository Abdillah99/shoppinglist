import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import styles from './style';

export default DrawerCustom = (props) => {

    return (
        <DrawerContentScrollView {...props} style={styles.container} contentContainerStyle={{ flex: 1, }}>
            <View style={styles.signInContainer}>
                <View style={styles.signInImage}>
                    <Image style={styles.signInIcon} source={require('@assets/icon/login.png')} />
                </View>
                <View style={styles.signInButton}>
                    <TouchableNativeFeedback onPress={() => props.navigation.navigate('Auth')}>
                        <Text>Sign In</Text>
                    </TouchableNativeFeedback>
                    <Text>log in once </Text>
                </View>
            </View>
            <View style={styles.menuContainer }>
                <DrawerItemList {...props} labelStyle={styles.labelText} activeBackgroundColor={null} />
                <DrawerItem
                    label="Info"
                    onPress={() => alert('haha nub')} />
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 10 }}>Coded by Curiousab</Text>
            </View>
        </DrawerContentScrollView>
    );

}