require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "mahendra2811",
    "id": 88758840,
    "node_id": "MDQ6VXNlcjg4NzU4ODQw",
    "avatar_url": "https://avatars.githubusercontent.com/u/88758840?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mahendra2811",
    "html_url": "https://github.com/mahendra2811",
    "followers_url": "https://api.github.com/users/mahendra2811/followers",
    "following_url": "https://api.github.com/users/mahendra2811/following{/other_user}",
    "gists_url": "https://api.github.com/users/mahendra2811/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mahendra2811/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mahendra2811/subscriptions",
    "organizations_url": "https://api.github.com/users/mahendra2811/orgs",
    "repos_url": "https://api.github.com/users/mahendra2811/repos",
    "events_url": "https://api.github.com/users/mahendra2811/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mahendra2811/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Mahendra Singh Puniya",
    "company": "Indian institute of information technology Dharwad",
    "blog": "http://mahendrapuniya.online/",
    "location": "Jodhpur , Rajasthan",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 55,
    "public_gists": 0,
    "followers": 3,
    "following": 9,
    "created_at": "2021-08-11T03:49:04Z",
    "updated_at": "2024-12-27T13:25:30Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send("<h1>Welcome to the mahendra serever</h1>");
})
app.get('/github', (re, res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})