// export const addUser = (data) => {
//     return (dispatch) => {
//         fetch('http://127.0.0.1:9393/users', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             method: 'POST',
//             body: JSON.stringify({user: data})
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             window.localStorage.setItem("jwt", data.jwt)
//             dispatch({type: "ADD_USER", payload: data.user})
//         })
//     }
// }
export const addUser = (data) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:9393/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ user: data })
        })
            .then(resp => resp.json())
            .then(data => {
                window.localStorage.setItem("jwt", data.jwt)
                dispatch({ type: "ADD_USER", payload: data.user })
            })
    }
}