Plain curl HTTP Get
curl url

curl HTTP Get to redirect
curl -L url

curl to get headers along with response
curl -i url

curl to get only headers
curl -I url

curl to get details of Client Server Interaction (Used for troubleshooting)
curl -v url

curl to log all client server interaction to file
curl --trace FILE url

curl to send headers in request
curl -H "Accept:application/json" url

curl to POST
curl -d "name=random&data=hello how are u?" url
e.g. curl -d "title=lorem&body=jflsjdsljlsj" https://jsonplaceholder.typicode.com/posts

    OR

    pass data in json form:
    curl -X POST -d "{"title":lorem,"body":jflsjdsljlsj}" url

curl to UPDATE
curl -X PUT -d '{"name": "morpheus","job": "zion resident"}' url

curl to DELETE
curl -X DELETE url
