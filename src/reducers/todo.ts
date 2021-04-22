const types = {
    CREATE: 'app/todo/CREATE',
    UPDATE: 'app/todo/UPDATE',
    DELETE: 'app/todo/DELETE'
}

const initialState = {
    items: []
}

const todo = (state = initialState, action: any) => {
    console.log(state);
    switch (action.type) {
        case types.CREATE:
            return {
                items: action.items.item
            }
        default:
            return state;
    }
}

export const actions = {
    create: (item: any) => ({
        type: types.CREATE,
        items: {
            item
        }
    })
}

export default todo;