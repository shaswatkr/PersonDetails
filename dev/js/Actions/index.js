export const selectUser = (user) => {
    return {
        type: "User Selected",
        payload: user
    }
};