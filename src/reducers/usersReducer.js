// const userReducer = (state = {user: {bills: []}}, action) => {
//     switch(action.type) {
//         case "ADD_USER":
//             return {user: action.payload}
//         case "ADD_BILL":
//             return {...state,
//             user: {...state.user, bills: [...state.user.bills, action.payload]}
//         }
//         default:
//             return state
//     }
// }


const usersReducer = (state = { users: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_USERS':
            return {
                ...state,
                users: [...state.cats],
                loading: true
            }
        case 'ADD_USERS':
            return {
                ...state,
                users: action.users,
                loading: true
            }
        default:
            return state;
    }
}

export default usersReducer;