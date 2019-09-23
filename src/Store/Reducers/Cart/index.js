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
        case 'UPDATEAMOUNT_to_CART': {
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