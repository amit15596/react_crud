const token = localStorage.getItem('accessToken') || {};
const HeaderToken = {
    headers: { 
        "authorization": token,
    }
}

export default HeaderToken;