export default function manageBills(state = { bills: [] }, action) {

    switch (action.type) {
        case "FETCH_BILLS":   
            return { bills: action.payload }
        case "ADD_BILL":
            return { ...state, bills: [...state.bills, action.payload]}
        
        case 'ADD_USER':
            let bills = state.bills.map(bill => {
                if (bill.id === action.payload.bill_id) {
                    bill.users = [...bill.users, action.payload] 
                    return bill
                } else {
                    return bill
                }
            })

            return { ...state, bills: [ ...bills] }

        case 'EDIT_BILL':
            let editedBill = state.bills.map(bill => {
                if (bill.id === action.payload.id) {
                    return action.payload
                } else {
                    return bill
                }
            })
            return { ...state, bills: editedBill }

        case 'DELETE_USER':           
            let allBills = state.bills.map(bill => {
                if (bill.id === action.payload.id) { 
                    return action.payload
                } else {
                    return bill
                }
            })
            return { ...state, bills: allBills }

        default:
            return state
    }
}


