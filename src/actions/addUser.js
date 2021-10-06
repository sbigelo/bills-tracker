export const addUser = (data) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:9393/bills/${data.bill_id}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(datas => {
                    dispatch({ type: "ADD_USER", payload: datas })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}