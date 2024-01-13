export function authHeader(options = false) {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem("user"));

    // if (user && user.access_token) {
        // return {  'Access': 'application/json', 'Authorization': 'Bearer ' + user.data.access_token };
  
        return {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
            
    // } else {
    //     return {};
    // }
}