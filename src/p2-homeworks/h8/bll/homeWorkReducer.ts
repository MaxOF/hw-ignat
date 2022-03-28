import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            const copyState = [...state].sort((a:UserType, b: UserType) => {
                if(a.name > b.name){
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }
                return 0
            })
            return action.payload.up ? copyState : state
        }
        case 'sortDown': {
            const copyState = [...state].sort((a:UserType, b: UserType) => {
                if(a.name > b.name){
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }
                return 0
            })
            return action.payload.down ? copyState.reverse() : state
        }
        case 'check': {
            const filteredState = state.filter(f => f.age > action.payload.age)
            return filteredState
        }
        default: return state
    }
}
type ActionsType = ReturnType<typeof setSortUp> | ReturnType<typeof checkAge> | ReturnType<typeof setSortDown>

export const setSortUp = (up: string) => {
    return {
        type: 'sortUp',
        payload: {
            up
        }
    } as const
}

export const setSortDown = (down: string) => {
    return {
        type: 'sortDown',
        payload: {
            down
        }
    } as const
}
export const checkAge = (age: number) => {
    return {
        type: 'check',
        payload: {
            age
        }
    } as const
}