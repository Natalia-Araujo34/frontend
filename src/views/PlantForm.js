import React, { useState, useContext } from 'react'
import {Text, View, TextInput, StyleSheet, Button, Picker} from 'react-native'
import PlantsContext from '../context/PlantsContext'
import DatePicker from 'react-native-datepicker';

export default ({route, navigation}) => {
    const[plant, setPlant] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(PlantsContext)
    const [date, setDate] = useState('27-11-2020');
    

    return(
       
       <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
               style={style.input}
               onChangeText={nome => setPlant({...plant, nome})}
               placeholder="Informe o nome da planta"
               value={plant.nome}
            />
            
            <Text>Família</Text>
            <TextInput
               style={style.input}
               onChangeText={familia => setPlant({...plant, familia})}
               placeholder="Informe a família da planta"
               value={plant.familia}
            />
            <Text>Data de Plantio</Text>
            <DatePicker
          style={style.datePickerStyle}
          value={plant.date}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

            <Text>Imagem</Text>
            <TextInput
               style={style.input}
               onChangeText={iconUrl => setPlant({...plant, iconUrl})}
               placeholder="Insira a URL da imagem"
               value={plant.iconUrl}
            />

            <Text>Preço</Text>
            <TextInput
               keyboardType = 'numeric'
               style={style.input}
               onChangeText={preco => setPlant({...plant, preco})}
               placeholder="Insira o valor da planta"
               value={plant.preco}
            />

            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: plant.id ? 'updatePlant' : 'createPlant',
                        payload: plant, 
                    })
                    navigation.goBack()
                }}
                />
       </View>
    

    )
    
}


const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10,
    }, 
    datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});