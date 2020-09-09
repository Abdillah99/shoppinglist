import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerCustom from '@components/Drawer';
import { 
    Auth, 
    MyList, 
    DetailList, 
    Settings,
    CreateList,
    Splash
} from '@pages/index';

import { useAppState } from '@modules/context/AppState';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ListStack() {
    return (
        <Stack.Navigator screenOptions={{headerTitle:null}}>
            <Stack.Screen 
                name="MyList" 
                component={ MyList} 
                options={{ headerShown: false, animationEnabled: false, }} 
            />
            <Stack.Screen
                name="ListDetail"
                component={DetailList}
                options={{
                    headerStyle: { elevation: 0 },
                    ...TransitionPresets.SlideFromRightIOS
                }} 
            />
            <Stack.Screen
                name="CreateList"
                component={CreateList}
                options={{
                   headerShown:false,
                    ...TransitionPresets.ModalSlideFromBottomIOS
                }} 
            />
        </Stack.Navigator>
    );
}



function MainStack() {
    return (
            <Drawer.Navigator
                initialRouteName="List"
                drawerType={'slide'}
                overlayColor={0}
                screenOptions={{gestureEnabled:false}}
                drawerContent={(props) => <DrawerCustom {...props} />} 
                >
                <Drawer.Screen name="Auth" component={Auth} options={{drawerLabel: ()=> null}} />
                <Drawer.Screen name="List" component={ListStack} />
                <Drawer.Screen name="Setting" component={Settings} />
            </Drawer.Navigator>
    );
}


function renderScreen(){
    const {isLoading, isError } = useAppState();
    
    if( isLoading || isError )return(
        <Stack.Screen
            name="Splash"
            component={Splash} 
        />
    )
    if( !isLoading && !isError )return(
        <Stack.Screen
            name="Main"
            component={MainStack} 
        />
    )
}
export default RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {renderScreen()}
            </Stack.Navigator>
        </NavigationContainer>

    )
}


