export function fetchBills() {
    return (dispatch) => {
        fetch('http://127.0.0.1:9393/bills')
        .then(resp => resp.json())
        .then(bills => dispatch({
            type: 'FETCH_BILLS',
            payload: bills
        }))
    }
}