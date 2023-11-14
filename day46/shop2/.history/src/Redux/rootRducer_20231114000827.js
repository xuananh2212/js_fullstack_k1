const initalState = {
     carts: JSON.parse(localStorage.getItem('carts')) || [],
     isLoading: false
}
const rootReducer = (state = initalState, action) => {
     switch (action.type) {
          case 'carts/add': {
               if (state.carts.lenght > 0) {
                    const cartNew = JSON.parse(JSON.stringify(state.carts));
                    const cartFind = cartNew.find(({ _id }) => _id === action.payLoad._id);
                    if (cartFind) {
                         cartFind.quantity = cartNew.quantity + 1;
                         localStorage.setItem('carts', JSON.stringify(cartNew));
                         return { ...state, carts: [...cartNew] }

                    }
               }
               localStorage.setItem('carts', JSON.stringify([...state.carts, action.payLoad]));
               return { ...state, carts: [...state.carts, action.payLoad] };
          }
          case 'loading/setLoading': {
               return { ...state, isLoading: !state.isLoading };
          }
          default: {
               return state;
          }
     }

}
export default rootReducer;