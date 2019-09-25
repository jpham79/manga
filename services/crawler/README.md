## Getting Started

Launching the crawler on windows:
1. CD into the crawler directory
2. Run the following commands

```
./env/Scripts/activate 
pip install -r requirements.txt
python bot.py
```

When installing new packages please run:
```
pip freeze > requirements.txt
```
### Docker:

# Building Image 

Note: This step might take a little while during the build.
"Building wheel for lxml (setup.py): started
Building wheel for lxml (setup.py): still running..."

```
docker build --rm -f "services\crawler\Dockerfile" -t crawler:latest services\crawler
```
# Running Docker
```
docker run -it crawler:latest
```