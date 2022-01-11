type initStatePT = {
    loading: boolean
}

type loadingACPT = ReturnType<typeof loadingAC>

const SET_LOADING = 'SET_LOADING'

export const loadingAC = (loading: boolean) => ({type: SET_LOADING, loading} as const)

const initState: initStatePT = {
    loading: false
}
export const loadingReducer = (state = initState, action: loadingACPT): initStatePT => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

