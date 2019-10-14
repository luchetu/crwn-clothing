import CartActionTypes from './cart.type';
const INITIAL_STATE={
    hidden:true
}
const cardReducer=(state=INITIAL_STATE,action){
    switch(CartActionTypes.TOGGLE_CART_HIDDEN){
        case(TOGGLE_CART_HIDDEN):
        return{
            ...state,
            hidden:!state.hidden
        }
        default:
            return state;
    }
}
export default cardReducer;