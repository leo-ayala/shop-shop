import React, { createContext, useContext } from "react";
import { reducer, useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;
import { createStore } from 'redux';

let store = createStore(reducer);

export default store;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });
//   console.log(state);
//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
