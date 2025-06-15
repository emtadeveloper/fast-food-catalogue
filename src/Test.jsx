import { createContext, useContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action .");
  }
}

export const StateContext = createContext(null);

export const DispatchContext = createContext(null);

export function useStateContext() {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.provider");
  }
  return value;
}

export function useDispatchContext() {
  const value = useContext(DispatchContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.provider");
  }
  return value;
}

const Display = () => {
  const state = useStateContext();
  return <span className="span">{state.count}</span>;
};

const Buttons = () => {
  const dispatch = useDispatchContext();
  return (
    <div className="buttons">
      <button className="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
      <button className="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
    </div>
  );
};

export const CartProvider = ({ children }) => {
  const [state, disptach] = useReducer(reducer, { count: 0 });

  return (
    <DispatchContext.Provider value={disptach}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}
