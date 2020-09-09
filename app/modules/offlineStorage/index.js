import AsyncStorage from '@react-native-community/async-storage';
import { call } from 'react-native-reanimated';

/**
 * 
 *  Cards : Card array of object 
 *  app_settings : settings, filter type,
 * 
 */
const key = {
    CARDS : '@cards',
    ITEMS : '@items',
    SETTINGS : '@app_settings',
};

/**
 * 
 * Main asyncstorage function 
 *  
 */
const get = async (key)=>{
    try{
        const jsonVal = await AsyncStorage.getItem(key); 
        const arrVal = jsonVal !== null ? JSON.parse(jsonVal) : [];
        return arrVal;
    }catch( e ){
        throw e;
    }
}

const set = async(key, data ) =>{
    try{
        const jsonVal = JSON.stringify( data );
        await AsyncStorage.setItem( key, jsonVal );
       
    } catch (e){
        console.log( e );
    }
}

const multiSet = async(data=[]) =>{
    try{
        await AsyncStorage.multiSet( data );
    }catch(e){
        throw e;
    }
}

const multiGet = async ( keys = []) =>{
    let values;
    try {
        values = await AsyncStorage.multiGet(keys)
    } catch (e) {
        throw e    
    }

    return values;
}

const clearAll = async () =>{
    try{
        console.log('clearing offline storage....')
        await AsyncStorage.clear();
        return true;
    }catch(e){
        throw e
    }
}


/**
 * Object offline storage function 
 */

const getAllCards = async() =>{
    try {
        const result = await get(key.CARDS);
        return result;
    } catch (e) {
        throw e
    }
}

const addCard = async( data ) =>{
    try {
        const localData = await get(key.CARDS);
        // console.log('addCard util local', localData);
        const updated = localData.concat(data); 
        // console.log('addCard util coming data ', data);
        // console.log('addCard util updated data ', updated);
        await set(key.CARDS, updated);
        return true;

    } catch (e) {
        throw e
    }
}

const deleteCard = async( id ) =>{
    try {
        const localData = await get(key.CARDS);
        const newUPdated = localData.filter( item => item.id !== id );
        await set(key.CARDS, newUPdated);
        return true;
    } catch (e) {
        throw e
    }
}

const loadAppCache = async() =>{
    let keyList = [key.CARDS, key.SETTINGS];

    try {
        const result = await multiGet(keyList);
        return result;
    } catch (e) {
        throw e
    }
}


export default offlineStorage = {
    getAllCards,
    addCard,
    deleteCard,
    loadAppCache,
    clearAll,
    key,
}

// /// GET Item from asyncStorage return parsed JSON object 
// export const get = (storageKey) => AsyncStorage.getItem( storageKey ).then( res => res ? JSON.parse(res) : [] );

// //SET item to asyncstorage must be parsed to string
// export const set = (storageKey, data) => AsyncStorage.setItem(storageKey, JSON.stringify(data));

// export const addList = async ( newList ) => {
//     const localList = await get(keys.LIST);
//     const newId = localList.length > 0 ?  localList[localList.length-1].id + 1 : 0;
//     const newData  = Object.assign({id:newId}, newList );
//     const lists = [...localList, newData];
    
//     return set(keys.LIST, lists);
// };

// //Get only 1 list, return promise
// export const getListById = async ( id ) =>
// {
//     const localList = await get( keys.LIST );
//     let list =  localList.find( item => item.id == id);

//     return list;
// }

// export const updateListById = async( id, data ) =>
// {
//     const localList = await get( keys.LIST );
//     const newData = localList.map( item => {

//         if( item.id == id)
//         {
//             item.title = data.title;
//             item.tags = data.tags;
//             item.completed = data.completed;
//             item.task = data.task;
//             item.list = data.list;

//         }

//         return item;

//     });

//     console.log( 'updated list ' + JSON.stringify( newData ));
    
//     return set(keys.LIST, newData );
// }

// export const deleteList = async( id ) => {

//     const localList = await get(keys.LIST);

//     const newList = localList.filter(item => item.id != id );

//     return set(keys.LIST, newList);

// }


// export const clear = AsyncStorage.clear;

// const offlineStorage = {

// } 
