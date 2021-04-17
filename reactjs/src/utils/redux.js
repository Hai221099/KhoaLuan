/**
 * 
 * Create reducer with default state and action handlers map
 *  @param {*} defaultState Default state of reducer
 *  @param {Object} handlers map key and handler
 *  @returns {Function} Reducer function
 */

 export function createReducer(defaultState, handlers) {
     return (state = defaultState, { type, payload}) => {
        const handler = handlers[type];
        return handler ? handler(state, payload, type) : state;
     };
 }