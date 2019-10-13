
```
### Docker:

# Building Image 
Windows:

```
docker build --rm -f "services\mongodb\Dockerfile" -t mongodb:latest services\mongodb
```
MacOs:
```
docker build --rm -f "services/mongodb/Dockerfile" -t mongodb:latest services/mongodb
```
# Running Docker
```
docker run -p 27017:27017 -it mongodb:latest -v /Users/justin/projects/manga/services/mongodb/data:/data/db
<!-- -v ./data:/data/db -->
```