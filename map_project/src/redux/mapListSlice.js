import { createSlice } from '@reduxjs/toolkit'



// redux slice: englobe innitial state and reducers and generate actions automatically
const mapListSlice = createSlice({

    name: "mapList",

    initialState: {
        locations: [],
    },

    reducers: {

        // Save locations visited by user
        SaveLocationsAction: (state, action) => {
            state.locations.push(action.payload)
            return state
        },
    }

})

export const { saveLocationsAction } = mapListSlice.actions;
export default mapListSlice.reducer;