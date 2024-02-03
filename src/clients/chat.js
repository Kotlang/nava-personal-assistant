import axios from 'axios';
import Cookies from 'js-cookie';

const sendRequest = async (id, queryRequest) => {
    const jwtToken = Cookies.get('jwtToken');

    const headers = {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json'
    };
    console.log(jwtToken)
    let body = {
        query: queryRequest.query || '',
        context: queryRequest.context || {}
    };

    if (id) {
        body.chat_session_id = id;
    }
    console.log(body)

    const url = process.env.REACT_APP_API_URL + '/v1/chat';


    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default sendRequest;