export const deleteUser = (user) => {
    return (dispatch) => {
        return fetch(`http://127.0.0.1:9393/bills/${user.bill_id}/users/${user.id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(bill => dispatch({ type: 'DELETE_USER', payload: bill }))
    }
}
