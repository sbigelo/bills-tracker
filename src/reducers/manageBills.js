export default function manageBills(state = {bills: []}, action) {
    switch(action.type) {
        case 'FETCH_BILLS':
            return {
                bills: action.payload
            }
            default:
                return state
    }
}