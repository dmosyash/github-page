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

export const getSearchResults = (params = {}) => {
    let apiUrl = new URL(`${baseUrl}search/movie`);
    return getAPIcall(apiUrl, params);
}


export const getMovieCast = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/${id}/credits`);
    return getAPIcall(apiUrl, params);
}

export const getCastDetails = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}person/${id}`);
    return getAPIcall(apiUrl, params);
}

export const getCastMovies = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}person/${id}/movie_credits`);
    return getAPIcall(apiUrl, params);
}

export const getSimilarMovies = (id, params = {}) => {
    let apiUrl = new URL(`${baseUrl}movie/${id}/similar`);
    return getAPIcall(apiUrl, params);
}