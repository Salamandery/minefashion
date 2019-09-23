import produce from 'immer';
export default function cart(state = [], action){
    switch(action.type){
        case 'ADD_TO_CART': {
            return produce(state, draft=>{
                const { product } = action;

                draft.push(product);
            });
        }
        case 'REMOVE_FROM_CART': {
            return produce(state, draft=>{
                const idx = draft.findIndex(p => p.id === action.id);
                if (idx >= 0) {
                    draft.splice(idx, 1);
                }
            });
        }
        case 'INCREMENT_to_CART': {
            return produce(state, draft=>{
                const idx = draft.findIndex(p => p.id === action.id);
                if (idx >= 0) {
                    draft[idx].amount = action.amount;
                }
            });
        }
        case 'DECREMENT_to_CART': {
            if (action.amount <= 0) {
                return state;
            }
            return produce(state, draft=>{
                const idx = draft.findIndex(p => p.id === action.id);
                if (idx >= 0) {
                    draft[idx].amount = action.amount;
                }
            });
        }
        default: {
            return state;
        }
    }
}