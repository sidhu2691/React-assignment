export function getStateList() {

    // return fetch("http://localhost:7070/api/products")
    //         .then(response => {
    //             return response.json();
    // });

    return fetch("http://localhost:7070/api/states")
        .then(response => {
        return response.json();
    })        
           
}

export function getStateView(id) {

    // return fetch("http://localhost:7070/api/products")
    //         .then(response => {
    //             return response.json();
    // });

    return fetch("http://localhost:7070/api/states/" + id)
        .then(response => {
        return response.json();
    })        
           
}

export function updateStateChanges(stateInfo) {

    // return fetch("http://localhost:7070/api/products")
    //         .then(response => {
    //             return response.json();
    // });


    return fetch("http://localhost:7070/api/states/" + stateInfo.id,{
    method: 'PUT',
    body: JSON.stringify(stateInfo),
    
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
        .then(response => {
            
        return response.json();
    })        
           
}