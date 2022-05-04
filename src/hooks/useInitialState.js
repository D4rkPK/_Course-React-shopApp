import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialSate = () => {
    const [state, steState] = useState(initialState);

    const addToCart = (payload) => {
        steState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    return {
        state, 
        addToCart
    }
}

export default useInitialSate;

