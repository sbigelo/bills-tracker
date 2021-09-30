export const addBill = (data) => {

    return (dispatch) => {
        fetch('http://127.0.0.1:9393/bills', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(bill => {
                    dispatch({ type: 'ADD_BILL', payload: bill })
            })
    }
}