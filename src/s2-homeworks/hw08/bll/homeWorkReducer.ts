import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    } else if (a.name < b.name) {
                        return -1
                    } else {
                        return 0
                    }
                })]
            }
            if (action.payload === 'down') {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    } else if (a.name < b.name) {
                        return 1
                    } else {
                        return 0
                    }
                })]
            } else return state
        }
        case 'check': {
            // return state.filter((el) => el.age >= action.payload)

            const newState = state.filter((el) => el.age >= action.payload)
            return newState.reverse()
        }
        default:
            return state

    }
}
