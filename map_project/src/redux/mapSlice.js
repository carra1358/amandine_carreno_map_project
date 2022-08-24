
import { createSlice } from '@reduxjs/toolkit'



// redux slice: englobe innitial state and reducers and generate actions automatically
const mapSlice = createSlice({

    name: "map",

    initialState: {
        currentLocation: { lat: 1, long: 1 }
    },

    reducers: {
        // update location lon and lat
        GetcurrentLocation: (state, action) => {
            state.currentLocation = action.payload
        }
    }

})

export const { GetcurrentLocation } = mapSlice.actions;
export default mapSlice.reducer;