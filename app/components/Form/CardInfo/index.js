import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

import styles from './style';


export const CardInfo = ( { data, onEditTitle, onEditTags, onClose } ) => {

    var title = data !== undefined ? data.title : '';
    var tags = data !== undefined? data.tags : '';

    const _setTitle = (event) =>{
        var tit = event.nativeEvent.text;

        const data ={
            title:tit,
        }
        onEditTitle(data);
        // setCurrTitle(text);
    } 

    const _setTags = (event) => {
        var tag = event.nativeEvent.text;
        const data ={
            tags:tag,
        }
        onEditTags(data);
    }
    
    return (
        <KeyboardAvoidingView style={styles.container} >
            <ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Image style={styles.closeIcon} source={require('@assets/icon/close.png')} />
                </TouchableOpacity>
                <View style={styles.formContainer}>
                    <Text style={styles.headingText}>List Name</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="name" 
                        underlineColorAndroid="#000"
                        onEndEditing={_setTitle} 
                        defaultValue={title} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.headingText}>Tags</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="sepparated with comma" 
                        underlineColorAndroid="#000" 
                        onEndEditing={_setTags} 
                        defaultValue={tags}/>
                </View>
                <View style={[styles.formContainer,{flexDirection:'row'}]}>
                    <View style={styles.shareTextContainer}>
                        <Text style={styles.headingText}>Share</Text>
                        <TextInput style={styles.textInput} placeholder="Email" underlineColorAndroid="#000" />
                    </View>
                    <TouchableNativeFeedback onPress={() => alert('haha')}>
                        <View style={styles.shareButtonContainer}>
                            <View style={styles.shareButton}>
                                <Image style={{width:16, height:16}} source={require('../../../assets/icon/next.png')}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.userList}>
                    <View>
                        <Text style={styles.headingText}> Who's on list</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}