import React, { useContext } from 'react'
import {View, Text, FlatList, Alert} from 'react-native'
import {ListItem, Button, Icon} from 'react-native-elements'
import PlantsContext from '../context/PlantsContext'

export default props => {

    const {state, dispatch} = useContext(PlantsContext)

    function confirmDelete(plant){
        Alert.alert('Excluir Planta Cadastrada', 'Deseja excluir a planta cadastrada?', [
            {
                text: 'Sim', 
                onPress(){
                    dispatch({
                        type: 'deletePlant', 
                        payload: plant, 
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(plant){
        return(
            <>
              <Button
              onPress={() => props.navigation.navigate('PlantForm', plant)} 
              type="clear"
              icon={<Icon name="edit" size={25} color="orange"/>}
              />
              <Button
              onPress={() => confirmDelete(plant)} 
              type="clear"
              icon={<Icon name="delete" size={25} color="red"/>}
              />
            </>
        )
    }
    
    function getPlantItem({ item: plant }){
    return(
        <ListItem
        leftAvatar = {{source: {uri: plant.iconUrl}}}
        key={plant.id}
        title={plant.nome}
        subtitle={plant.familia}
        bottomDivider
        rightElement={getActions(plant)}
        />
         
    )
    }

    return (
        <View>
            <FlatList
            keyExtractor={plant => plant.id.toString()}
               data={state.plants}
               renderItem={getPlantItem}
            />
        </View>
    )
}