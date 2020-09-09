import React, {  createContext, useReducer, useContext } from 'react';
import { nanoid } from 'nanoid/non-secure';
import offlineStorage from '@modules/offlineStorage/index';

const ListState = createContext();
const ListAction = createContext();

const initialState ={
    cards :[],
    isLoading:false,
}

const actionType = {
    INIT: 'INIT_CARD',
    ADD: 'ADD_CARD',    
    UPDATE: 'UPDATE_CARD',
    DELETE:'DELETE_CARD',
    SEARCH: 'SEARCH_CARD',
    SORT: 'SORT_CARD',
}

const reducer = (state, action) =>{
    switch( action.type ){
        case actionType.INIT:
            return{
                cards:action.payload
            }
        case actionType.ADD:
            return{
                cards:[...state.cards, action.payload],
            };
        case actionType.DELETE:
            return{
                cards:state.cards.filter(
                    list => list.id !== action.payload
                )
            }
        case actionType.UPDATE:
            return{
                cards:action.payload
            }
        default:
            throw new Error();
    }
}

const filterType ={
	OLDEST : 'OLDEST',
	RECENT: 'RECENT',
	ALPHABET : 'ALPHABET',
	TAGGED: 'TAGGED',
	UNTAGGED: 'UNTAGGED',
}

const sortCard = ( param ) =>{
    var tmp = state.cards;

    switch(param){
        case filterType.OLDEST :
            var sorted = tmp.sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated) );
            break;
        
        case filterType.ALPHABET:
            var sorted = tmp.sort((a, b) => a.title.localeCompare(b.title));
            break

        case filterType.RECENT:
            var sorted = tmp.sort((a, b) => new Date(b.dateCreated) -  new Date(a.dateCreated));
            break;

        default:
            throw Error('Invalid filter type', param);
            break;
}
}
const ListProvider = (props) =>{

    const [ state, dispatch ] = useReducer( reducer, initialState );

    const action =  {
        initCard: (data) =>{
            dispatch({type:actionType.INIT, payload:data});
        },
        addCard: async (data) => {
            var newId = nanoid();
            data.id = newId;
            await offlineStorage.addCard(data);
            dispatch({type:actionType.ADD,payload:data});
        },
        updateCard: (data) =>{
            
            dispatch({type:actionType.UPDATE,payload:data});
        },
        deleteCard: (id) =>{
            offlineStorage.deleteCard(id);
            dispatch({type:actionType.DELETE,payload:id});
        },
        sortCard: (by) =>{


            dispatch({type:actionType.SORT,payload:data});
        },
        searchCard: (param)=>{


            dispatch({type:actionType.SEARCH,payload:data});
        }
    }

    return(
        <ListState.Provider value={state}>
            <ListAction.Provider value={action}>
                {props.children}    
            </ListAction.Provider>  
        </ListState.Provider>
    )
 }

 const useListAction = () => {
	const context = useContext( ListAction );
	if (context === undefined) {
		throw new Error(' useListAction must be used within List provider')
	}
	return context
}

const useListState = () => {
	const context = useContext( ListState );
	if( context === undefined ){
		throw new Error('useListState must be used within List provider')
	}
	return context
}
 export { ListProvider,useListAction,useListState };