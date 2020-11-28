import React, {createContext, useReducer} from 'react'
import plants from '../data/plants'

const initialState = {plants}
const PlantsContext = createContext({})

const actions = { 
    createPlant(state, action){
        const plant = action.payload
        plant.id = Math.random()
        return { 
            ...state, 
            plants: [...state.plants, plant],
        }
    }, 
    updatePlant(state, action){
        const updated = action.payload
        return { 
            ...state, 
            plants: state.plants.map(u => u.id === updated.id ? updated : u)
        }
    },
    deletePlant(state, action){
        const plant = action.payload
        return{
            ...state, 
            plants: state.plants.filter(u => u.id !== plant.id)
        }
    }
}

export const PlantsProvider = props => {

   function reducer(state, action){
       const fn = actions[action.type]
       return fn ? fn(state, action) : state
   }


    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <PlantsContext.Provider value={{state, dispatch}}>
            {props.children}
        </PlantsContext.Provider>
    )
}

export default PlantsContext

