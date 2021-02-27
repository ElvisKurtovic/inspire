// @ts-ignore
export const mainApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/",
    timeout: 10000
})

// @ts-ignore
export const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/elvis/todos",
    timeout: 10000
})