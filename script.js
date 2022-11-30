let url = "https://github.com/login/oauth/access_token"

fetch (
    url,
    {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "github.com",
            "Content-Type": "application/json"
        }
    }
).then(response => {
    console.log(response)
});