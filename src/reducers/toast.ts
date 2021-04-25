const types = {
    OPEN: 'app/toast/OPEN',
    CLOSE: 'app/toast/CLOSE'
}

const initialState = {
    open: false,
    type: 'error',
    message: ''
}

const toast = (state = initialState, action: any) => {
    console.log(state);
    switch (action.type) {
        case types.OPEN:
            return {
                ...state,
                open: true,
                type: action.toast.item.type,
                message: action.toast.item.message
            }
        case types.CLOSE:
            return {
                ...state,
                open: false
            }
        default:
            return state;
    }
}

export const actions = {
    open: (item: any) => ({
        type: types.OPEN,
        toast: {
            item
        }
    }),
    close: () => ({
        type: types.CLOSE
    })
}

export default toast;