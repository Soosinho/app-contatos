import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Cores from '../cores/cores';

import Contatos from '../telas/Contatos';
import EditarContato from '../telas/EditarContato';
import AddContato from '../telas/AddContato';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Contatos"}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Cores.yellow : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.yellow
                }}
            >

                <Stack.Screen
                    name="Contatos"
                    component={Contatos}
                    initialParams={{
                        listaContatos: []
                    }}
                    options={{
                        headerTintColor: 'black',
                    }}
                />

                <Stack.Screen
                    name="AddContato"
                    component={AddContato}
                    options={{
                        title: "Novo Contato",
                        headerTintColor: 'black',
                    }}
                />

                <Stack.Screen
                    name="EditarContato"
                    component={EditarContato}
                    options={{
                        title: "Editar Contato",
                        headerTintColor: 'black',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}