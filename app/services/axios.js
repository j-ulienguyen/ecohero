import axios from 'axios';

// Change to your IP Address
// cmd -> ipconfig
// Terminal -> ifconfig
// http://YourIP:3001/post

var IP_ADDRESS = "10.228.10.5";

const url = "http://"+IP_ADDRESS+":3001/post";

export async function ax(key, data){
    var obj = {
        key: key,
        data: data
    }

    var resp = await axios.post(url, obj)
    var yourData = JSON.parse(resp.data.body);

    if(yourData.status){
        yourData = yourData.data
    } else {
        console.log(yourData.msg);
    }

    return yourData;
};