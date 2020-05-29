
const initialState = {
    items: []
}

const workflow = (state = initialState, action: any) => {
    switch (action.type) {

        case 'ADD_WORKFLOW':
            return Object.assign(
                {}, state, {
                items: [...state.items, {
                    id: action.id,
                    name: `${action.text} ${action.id}`,
                    status: false
                }]
            })

        case 'DELETE_WORKFLOW':
            const newState = state.items.filter((x: any) => x.id !== action.id)
            return Object.assign({}, state, { items: newState })

        default:
            return state
    }
}

export default workflow