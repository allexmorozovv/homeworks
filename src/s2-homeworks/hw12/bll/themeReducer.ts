type StateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}
type ActionThemeType = ReturnType<typeof changeThemeId>

export const themeReducer = (state: StateType = initState, action: ActionThemeType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) // fix any
