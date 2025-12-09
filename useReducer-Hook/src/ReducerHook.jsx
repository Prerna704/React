import React,{useReducer} from 'react'

export default function ReducerHook() {

const [state,dispatch] = useReducer(reducer,0);
        function reducer(state,action){
            if(action.type === "ADD"){
                return state + 1;
            } else if(action.type === "SUB"){
                return state - 1;
            }else{
                return 0;
            }

        }

  return (
    <div>
        <h1>{state}</h1> 
<button  className='bg-red-400 rounded-2xl p-1 m-1'

onClick={()=>{dispatch({type:"ADD"})}}>
    add

</button>

<button className='bg-green-400 rounded-2xl p-1 m-1' 

onClick={()=>{dispatch({type:"SUB"})}}>
    sub

</button>

<button className='bg-blue-400 rounded-2xl p-1 m-1'
onClick={()=>{dispatch({type:"RST"})}}>
    reset

</button>




    </div>
  )
}
