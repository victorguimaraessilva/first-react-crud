
export const SET_PESSOAS = 'SET_PESSOAS'


function handleResponse(response) {
  console.log("oioi")
  console.log(response);
  console.log("oioi")
  if (response.ok) {
    return response.json();
  } else {
    alert("2")
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setGames(pessoas) {
  return {
    type: SET_PESSOAS,
    pessoas
  }
}

export function savePessoa(data) {

  return dispatch => {
    return fetch('http://localhost:8080/api/pessoas', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse);
    
  }

}


export function fetchPessoas() {

  return dispatch => {
    fetch('http://localhost:8080/api/pessoas')
      .then(res => res.json())
      .then(data => dispatch(setGames(data)));
  }

}