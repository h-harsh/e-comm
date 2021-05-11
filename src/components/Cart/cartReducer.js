
export const cartFunc = (state, { type, payload }) => {

    switch (type) {
      case "LOAD_DATA":
        return state = payload;

      case "ADD_TO_CART":
        return state = [...state, {...payload, qty: 1}];

      case "INCREASE_QTY":
        return state = state.map(item => {
          if(item.id === payload.id){
            return {...payload, qty: payload.qty + 1}
          } else {
            return item
          }
        })

      case "DECREASE_QTY":
        return state = state.map(item => {
          if(item.id === payload.id){
            return {...payload, qty: payload.qty - 1}
          } else {
            return item
          }
        })

      case "REMOVE_FROM_CART":
        return state = state.filter(item => item.id !== payload.id);
        
      default:
        break;
    }
  };

