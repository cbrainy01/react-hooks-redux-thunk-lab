export function fetchCats() {
    return function(dispatch) {
        // dispatch action to show component is loading
        dispatch({type: "cats/catsLoading"})
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
        .then(r => r.json())
        .then( (rData) => dispatch({type: "cats/catsLoaded", payload: rData.images}) )

    }
}

// export function fetchCats() {
//     return {
//         type: "cats/catsLoading",
//         payload: {},
//     }
// }