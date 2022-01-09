
export const wishListReducer = (state, { type, payload }) => {
    switch (type) {
        case "LOAD_WISHLIST_DATA":
            return state = payload;
        case "ADD_TO_WISHLIST":
            return state = [...state, {...payload}];
        case "REMOVE_FROM_WISHLIST":
            return state = state.filter(item => item._id !== payload._id);
        default:
            return state;
    }
}