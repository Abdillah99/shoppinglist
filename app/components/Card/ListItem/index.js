import React from 'react'
import { View, Text,TouchableWithoutFeedback } from 'react-native';
import EditDelete from '@components/Button/EditDelete';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styles from './style'

const ListItem = ({data,onPress,onEdit,onDelete}) => {

    const _renderRightAction = () =>{

        const _onDelete = () =>{
            onDelete(data.id);
        }

        const _onEdit = () =>{
            onEdit(data);
        }

        return(
            <EditDelete 
                onEdit={_onEdit}
                onDelete={_onDelete} 
            />
        )
    }

    const _onPress = () =>{
        onPress(data.id);
    }

    return (
        <Swipeable containerStyle={styles.swipeContainer} renderRightActions={_renderRightAction}> 
            <TouchableWithoutFeedback onPress={_onPress}>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardItemNameText}>{data.name}</Text>
                    <View style={styles.cardUnitContainer}>
                        <Text style={styles.cardItemQtyText}>{data.quantity}</Text>
                        <Text style={styles.cardItemUnitText}>{data.unit}</Text>
                    </View>
                    
                    {data.completed && <View style={styles.strikeLine}/> }
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    )
}

export default ListItem
