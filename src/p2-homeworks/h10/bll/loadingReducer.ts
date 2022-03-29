
const initState = {
    isLoading: false
}
type InitStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: InitStateType = initState, action: loadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING/SET-LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}
export type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'LOADING/SET-LOADING',
        isLoading
    } as const
}