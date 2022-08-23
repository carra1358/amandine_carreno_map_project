
import { createSlice } from '@reduxjs/toolkit'



// redux slice: englobe innitial state and reducers and generate actions automatically
const mapSlice = createSlice({

    name: "map",

    initialState: {
        locations: []
    },

    reducers: {

        // Save locations visited by user
        createAction: (state, action) => {
            state.locations.push(action.payload)
            return state
        },
    }

})

export const { createAction } = mapSlice.actions;
export default mapSlice.reducer;