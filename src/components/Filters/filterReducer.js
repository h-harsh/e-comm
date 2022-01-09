export const filterFunc = (state, { type, payload }) => {
    switch (type) {
      case "SORT":
        return { ...state, sortBy: payload };
      case "SHOW-IN-STOCK-ONLY":
        return { ...state, showAll: !state.showAll };
      case "FAST-DELIVERY":
        return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };
      default:
        break;
    }
  };