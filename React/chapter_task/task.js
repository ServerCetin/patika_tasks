import axios from 'axios'

async function getData(userId) {
    const userInfos = await axios("https://jsonplaceholder.typicode.com/users/" + userId.toString())
        .then(res => res.data);
    const posts = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId.toString())
        .then(res => res.data);

    return {userInfos, posts}
}

export default getData;