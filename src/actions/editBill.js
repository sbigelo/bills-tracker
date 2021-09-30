export const editBill = (data) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:9393/bills/${data.id}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(bill => {
                dispatch({
                    type: 'EDIT_BILL',
                    payload: bill
                })

            })
    }
}
