
import { createSlice } from '@reduxjs/toolkit'



// redux slice: englobe innitial state and reducers and generate actions automatically
const mapSlice = createSlice({

    name: "map",

    initialState: {
        currentLocation: { lat: 1, long: 1 },
        list: []
    },

    reducers: {
        // update location lon and lat
        GetcurrentLocation: (state, action) => {
            state.currentLocation = action.payload
        },
        saveLoc: (state, action) => {
            state.list.push(action.payload)
            return state
        },
    }

})

export const { GetcurrentLocation, saveLoc } = mapSlice.actions;
export default mapSlice.reducer;