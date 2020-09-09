import React from 'react'
import { View, TouchableOpacity,Image } from 'react-native'

import styles from './style';

const EditDelete = ({onEdit, onDelete}) => {
    return ( 
        <View style={styles.swipeRightContainer} >
            <TouchableOpacity style={styles.swipeButton} onPress={onEdit}>
                <Image style={styles.swipeIcon} source={require('@assets/icon/edit-yellow.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.swipeButton} onPress={onDelete}>
                <Image style={styles.swipeIcon} source={require('@assets/icon/close-red.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default EditDelete
