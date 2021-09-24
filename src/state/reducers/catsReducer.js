const initialState = {
    entities: [],
    status: "idle",
}

export default function catsReducer(state = initialState, action) {

    switch(action.type) {
        case "cats/catsLoading":
            return {
                ...state,
                status: "loading"
            }
        case "cats/catsLoaded":
            return {
                ...state,
                entities: action.payload,
                status: "idle",
            }    
        default: return state;    

    }
}