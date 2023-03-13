import Button from '../components/Button';
import {useReducer} from 'react'
import Panel from '../components/Panel';
import produce from 'immer'

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const HANDLE_CHANGE = 'handleChange'
const HANDLE_SUBMIT = 'handleSubmit'

const reducer = (state, action)=>{

    switch(action.type){
        case INCREMENT:
            // return{
            //     ...state,
            //     count : state.count +1
            // };
            state.count = state.count +1;
            return;
            case DECREMENT:
                // return{
                //     ...state,
                //     count: state.count -1
                // };
                state.count= state.count -1;
                return;
                case HANDLE_CHANGE:
                    // return{
                    //     ...state,
                    //     valueToAdd: action.payload,
                    // };
                    state.valueToAdd = action.payload
                    return;
                    case HANDLE_SUBMIT:
                        
                            // return{
                            //     ...state,
                            //     count: state.count + state.valueToAdd,
                            //     valueToAdd: 0
                            // };
                            state.count = state.count + state.valueToAdd;
                            state.valueToAdd = 0;
                            return;
                        default: 
                        return;
    }

}
// if( action.type ===INCREMENT)
// {return {
//     ...state,
//     count: state.count +1
// }}
// if(action.type ===DECREMENT){
// return{
// ...state,
// count: state.count-1
// }}
// if(action.type === HANDLE_CHANGE){
//     return{
//         ...state,
//         valueToAdd: action.payload 
//     }
// }
// if(action.type === HANDLE_SUBMIT){
//     return{
//         ...state,
//         count: count + valueToAdd
//     }
// }
// return state;
// }

function CounterPage({ initialCount }) {
// const [count , setCount] = useState(initialCount)
// const [valueToAdd, setValueToAdd] = useState(0);
const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
})

const increment = ()=>{
    // setCount(count + 1)
    dispatch({type: INCREMENT});
}
const decrement = ()=>{
    // setCount(count - 1)
    dispatch({type: DECREMENT});
}
const handleChange = (event)=>{
    const value = parseInt(event.target.value) || 0;
    console.log(value) 
    // setValueToAdd(value)
    dispatch({type: HANDLE_CHANGE, payload: value})
}
const handleSubmit = (event)=>{
    event.preventDefault();
    
    dispatch({type : HANDLE_SUBMIT})
    // setCount(count + valueToAdd);
    // setValueToAdd(0)

}
return <Panel className='m-3'>

        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row '>
        <Button primary onClick={increment}>Increment</Button>
        <Button primary onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300'/>
            <Button>Add it!</Button>

        </form>
    </Panel>


}
export default CounterPage;