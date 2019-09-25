
```
### Docker:

# Building Image 


```
docker build --rm -f "services\crawler\Dockerfile" -t crawler:latest services\crawler
```
# Running Docker
```
docker run -p 27017:27017 -it mongodb:latest
```