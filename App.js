import { StatusBar } from 'expo-status-bar';
import React from 'react';
import PlantList from './src/views/PlantList'
import PlantForm from './src/views/PlantForm'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Button, Icon} from 'react-native-elements'
import { PlantsProvider } from './src/context/PlantsContext'


const Stack = createStackNavigator()

export default props => {
    return (
        <PlantsProvider>
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="PlantList"
            screenOptions={screenOptions}>
                <Stack.Screen
                name="PlantList"
                component={PlantList}
                options={({navigation}) => {
                    return {
                        title: "Lista de Plantas Cadastradas",
                        headerRight: () => (
                            <Button
                            onPress={() => navigation.navigate("PlantForm")}
                            type="clear"
                            icon={<Icon name="add" size={25} color="white"/>}
                            />
                        )

                    }
                }}
                />
                <Stack.Screen
                name="PlantForm"
                component={PlantForm}
                options={{
                    title: "Cadastrar uma Nova Planta"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </PlantsProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#8FE69E'
    }, 
    headerTintColor: '#fff', 
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
