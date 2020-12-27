import React from 'react';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    option={{ headerShow: false}}
                />
                <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    option={{ headerShow: false}}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15}}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;