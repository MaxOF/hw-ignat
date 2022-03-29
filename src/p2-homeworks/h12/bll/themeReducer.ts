const initState: InitStateType = {
    themes: ['dark', 'red', 'some'],
    currentTheme: 'red'
}

export const themeReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "THEME/CHANGE-THEME": {
            return {
                ...state,
                currentTheme: action.theme
            }
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: ThemeType) => {
    return {
        type: "THEME/CHANGE-THEME",
        theme
    } as const
}; // fix any
export type ThemeType = 'dark' | 'red' | 'some'

export type InitStateType = {
    themes: string[]
    currentTheme: ThemeType
}


