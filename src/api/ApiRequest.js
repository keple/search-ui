import axios from "axios";

const apiList = {
    global : {
        //sample...
        getUserInfo : () => {
            return axios({
                method : 'post',
                url : 'http://localhost:3000/profile/getUser',
                data : {
                    searchId : 'test'
                }
            })
        }
    }
}

export default apiList;