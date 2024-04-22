from fastapi import FastAPI

app = FastAPI()


@app.get("/api/v1/hello")
async def api_v1():
    return {"message": "Hello World"}
