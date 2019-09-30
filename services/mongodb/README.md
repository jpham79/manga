
```
### Docker:

# Building Image 


```
docker build --rm -f "services\mongodb\Dockerfile" -t mongodb:latest services\mongodb
```
# Running Docker
```
docker run -p 27017:27017 -it mongodb:latest
```