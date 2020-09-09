import React, { 
    createContext,
    useContext, 
    useReducer,  
} from 'react';

const AppStateContext = createContext();
const AppActionContext = createContext();

const actionType ={
    SET_LOADING: 'SET_LOADING',
    LOADING_SUCCESS: 'FINISH_LOADING',
    LOADING_ERROR: 'APP_ERROR',
}

const initialState = {
    isLoading:true,
    isError:false,
    errorMessage:'',
}

const appStateReducer = ( state, action ) =>{
    switch (action.type) {
        case actionType.LOADING_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
            }
        case actionType.SET_LOADING:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case actionType.LOADING_ERROR:
            return{
                isLoading:false,
                isError:true,
                errorMessage: action.payload,
            }
        default:
            throw Error('Action type not found ', action.type);
            break;
    }

}

export const AppStateProvider = (props) =>{
    const[state, dispatch] = useReducer(appStateReducer, initialState);

    const action = {
        setAppLoading: () =>{
            dispatch({type:actionType.SET_LOADING})
        },
        finishAppLoading: ()=>{
            dispatch({type:actionType.LOADING_SUCCESS}) 
        },
        appLoadingError: ( errorMsg )=>{
            dispatch({type:actionType.LOADING_ERROR, payload:errorMsg})
        }
    }

    return(
        <AppStateContext.Provider value={state}>
            <AppActionContext.Provider value={action}>
                {props.children}
            </AppActionContext.Provider>
        </AppStateContext.Provider>
    )
}

export const useAppState = () =>{
    const context = useContext(AppStateContext);
    if( context === undefined ) throw new Error(' useAuthContext must be used within AppStateProvider');
    
    return context;
}

export const useAppAction = () =>{
    const context = useContext(AppActionContext);
    if( context === undefined ) throw new Error(' useAppAction must be used within AppStateProvider ');
    
    return context;
}