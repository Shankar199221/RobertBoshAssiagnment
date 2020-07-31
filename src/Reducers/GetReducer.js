const initialState = {
    data:[],
    userdata:{}
}


export default function GetReducer(state=initialState,action) {
    switch(action.type){

      //  //Update the store data accordng to action type  
            case "GET_DATA":
                return {
                    ...state,
                data:[...action.payload]
                }
      // //Edit the store data accordng to action type          
            case "EDIT_DATA":
                return{
                    ...state,
                data:state.data.map( data => data.id === action.payload.id ? action.payload :data)
                }
      //   //Update the store userdata accordng to action type        
            case "USER_DATA":
                return{
                    ...state,
                    userdata:action.payload
                }
            default : 
                return state   
    }
}

