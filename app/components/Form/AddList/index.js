import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,

} from 'react-native';

import { nanoid } from 'nanoid/non-secure';

import styles from './style';

const buttonUnit = [
    {
        key: 'pcs',
        Value: 'pcs',
    },
    {
        key: 'kg',
        Value: 'Kilogram',
    },
    {
        key: 'ml',
        Value: 'mili',
    },
    {
        key: 'pkg',
        Value: 'package',
    },
    {
        key: 'bott',
        Value: 'bottle',
    },
    {
        key: 'can',
        Value: 'can',
    },

]


export const FormAddList = ({onAddItem, listData }) => {
    
    const [name, setName] = useState();
    const [qty, setQty] = useState(0);
    const [unit, setUnit] = useState();

    const nameRef = useRef(null);

    const _setName = (e) => {
        var name = e.nativeEvent.text;
        setName(name);
    }
	const _setQty = (text) =>{
        
        if( text == '' )
		{
			setQty(text);
		}
		else
		{
			setQty(parseInt(text));
        }
        
	} 
		
	const plusQty = () => {
		
		const parsed = parseInt( qty );
		const quantity = isNaN(parsed) ? 0 : parsed;

        setQty( quantity+1 );

	}
	
	const minQty = () => { 
        if( qty > 0 ) setQty(qty-1);
    }

	const _setUnit = (type) => () => setUnit(type);

    const _addItem = () =>
    {   

		if ( name == '') {
			alert('fill item name');
		}
		else if (qty == '' || qty == 0) {
			alert('fill the quantity');
		}
		else if (unit == '') {
			alert('chose the unit');
		}
		else {
			let obj = {
                id:nanoid(),
				name: name,
				quantity: qty,
				unit: unit,
				done: false,
			}
            onAddItem( obj );
        }
        
    }

    return ( 
        <View style={styles.formListContainer}>
            <View style={styles.textInputContainer}>
                <View style={styles.textInputName}>
                    <TextInput 
                        style={styles.nameTextInput}
                        placeholder='Product'
                        onChange={_setName} 
                        />
                </View>
                <View style={styles.textInputQty}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={minQty}>
                        <Image source={require('@assets/icon/minus.png')} style={{ width: 14, height: 14 }} />
                    </TouchableOpacity>
                    <View style={styles.unitQtyContainer}>
                        <TextInput
                            style={styles.qtyTextInput}
                            contextMenuHidden={true}
                            keyboardType="number-pad"
                            placeholder='qty'
                            onChangeText={_setQty}
                            value={qty == 0 ? '' : qty.toString()}
                        />
                        <Text style={styles.unitText}>{unit}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={plusQty}>
                        <Image source={require('@assets/icon/plus.png')} style={{ width: 14, height: 14 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonUnitContainer}>
                {buttonUnit.map(item => {
                    return (
                        <TouchableOpacity 
                            key={item.key} 
                            style={unit == item.key ? styles.buttonUnitSelected : styles.buttonUnit} 
                            onPress={_setUnit(item.key)}>
                            <Text style={styles.buttonUnitText}>{item.key}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <TouchableOpacity style={styles.buttonAdd} onPress={_addItem}>
                <Image source={require('@assets/icon/tick.png')} style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
    );
}


