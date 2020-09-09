import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useAppState, useAppAction } from '@modules/context/AppState';
import { useListAction } from '@modules/context/List';
import offlineStorage from '@modules/offlineStorage';

const Splash = () => {
    const { finishAppLoading, appLoadingError } = useAppAction();
    const { isError, errorMessage } = useAppState();
    const { initCard } = useListAction();

    useEffect(()=>{
        //Load cache 
        loadAppCache();
        // clearAllData();
        // createDummyData();
    },[])

    const clearAllData = () =>{
        offlineStorage.clearAll().then(res =>{
            if(res){
                finishAppLoading();
            }
        })
    }
    
    const loadAppCache = () =>{
        offlineStorage.getAllCards().then(res =>{
            initCard(res);
            finishAppLoading();
        }).catch(e => appLoadingError(e));
    }

    return (
        <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large" color="dodgerblue" />
            <Text> Hi welcome </Text>
            {isError && <Text style={{color:'red'}}>{errorMessage}</Text>}
        </View>
    )
}

export default Splash
