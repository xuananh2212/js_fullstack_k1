// Thumk middeware => function trả về 1 function khác
import { client } from '../../Utils/Configs/client'
export const fetchApiEmail = (dataEmail) => {
     return async (dispatch) => {
          const queryString = new URLSearchParams({ email: dataEmail });
          const { data } = await client.get(`/api-key?${queryString}`);
          if (data.code === 200) {
               dispatch({
                    type: 'api/getEmail',
                    payload: data.data.apiKey
               })
               dispatch(fetchGetTasks(data.data.apiKey));
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
          }
     }
}

export const fetchGetTasks = (apiKey) => {
     return async (dispatch) => {
          const { data } = await client.get(`/tasks`, apiKey);
          const { data: getdata } = await client.get(`/tasks`, null, data.data.apiKey);
          console.log(getdata);
          if (data.code === 200) {
               dispatch({
                    type: 'api/getTasks',
                    payload: data.data
               })
          } else {
               dispatch({
                    type: 'api/resetApiKey',
               })
          }
     }
}