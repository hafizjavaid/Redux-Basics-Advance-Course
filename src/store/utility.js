export const updateObject = (oldState, newStateValue) => {

    return{
        ...oldState,
        ...newStateValue
    }

}