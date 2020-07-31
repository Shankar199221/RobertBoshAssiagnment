import axios from 'axios'

export const GetDataAction= () => {

    return async  (dispatch)=>{
          const data = await axios.get("https://reqres.in/api/users?page=2");
          dispatch({type:"GET_DATA",payload:data.data.data})  
}
}
