type initStatePT = {
    theme: string
}

type themeACPT = ReturnType<typeof setThemeAC>

const SET_THEME = 'SET_THEME'

export const setThemeAC = (theme: string) => ({type: SET_THEME, theme} as const)

const initState: initStatePT = {
    theme: 'dark'
}
export const themeReducer = (state = initState, action: themeACPT): initStatePT => { // fix any
    switch (action.type) {
        case SET_THEME: {
            return { theme: action.theme}
        }
        default:
            return state
    }
}

