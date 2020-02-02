// USER is constant, in this assignment.
const USER = "supreetsingh247";

//Base url of APIs of github.
const baseUrl = "https://api.github.com/users/";

//function to call any 'get' API 
const getAPIcall = (apiUrl) => {
    return fetch(apiUrl)
        .then(res => res.json());
}

export const getUserInfo = userId => {
    let apiUrl = new URL(`${baseUrl}${userId ? userId : USER}`);
    return getAPIcall(apiUrl);
}

export const getRepoDetails = (userId) => {
    let apiUrl = new URL(`${baseUrl}${userId ? userId : USER}/repos`);
    return getAPIcall(apiUrl);
}