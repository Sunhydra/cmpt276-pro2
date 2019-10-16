export function getAllTokimons() {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });
    return fetch('/api/tokimonAll', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }

    }).then((response) => {
      if (response.ok) {
        //console.log('test');
        return response.json().then((json) => {
          dispatch({
            type: 'GET_TOKIMON_ALL_SUCCESS',
            tokimonlist: json
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_TOKIMON_ALL_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
export function get(Id) {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });
    return fetch('/api/tokimonOne/'+Id, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }

    }).then((response) => {
      if (response.ok) {
        //console.log('test');
        return response.json().then((json) => {
          dispatch({
            type: 'GET_TOKIMON_ONE_SUCCESS',
            tokimonlist: json
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_TOKIMON_ONE_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
export function create(name, trainer, weight, height, fly, fight, fire, water, electric, ice, total){
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });
    return fetch('/api/tokimonNewOne', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({ name:name, trainer:trainer, weight:weight, height:height, fly:fly, fight:fight, fire:fire, water:water, electric:electric, ice:ice, total: total })

    }).then((response) => {
      if (response.ok) {
        //console.log('test');
        return response.json().then((json) => {
          dispatch({
            type: 'CREATE_TOKIMON_SUCCESS'
          });
          window.location = '/';
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'CREATE_TOKIMON_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
export function update(Id, name, trainer, weight, height, fly, fight, fire, water, electric, ice, total){
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });
    return fetch('/api/tokimonUpdateOne', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({Id: Id, name:name, trainer:trainer, weight:weight, height:height, fly:fly, fight:fight, fire:fire, water:water, electric:electric, ice:ice, total: total })

    }).then((response) => {
      if (response.ok) {
        //console.log('test');
        return response.json().then((json) => {
          dispatch({
            type: 'UPDATE_TOKIMON_SUCCESS'
          });
          window.location = '/tokimon/'+Id;
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'UPDATE_TOKIMON_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}


export function deleteOne(Id){
  console.log('delete'+Id);
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });
    return fetch('/api/tokimonDeleteOne/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({Id: Id})
    }).then((response) => {
      if (response.ok) {
        //console.log('test');
        return response.json().then((json) => {
          dispatch({
            type: 'DELETE_TOKIMON_ONE_SUCCESS',
            tokimonlist: json
          });

          window.location = '/';
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'DELETE_TOKIMON_ONE_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
