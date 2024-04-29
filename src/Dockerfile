FROM python:latest
WORKDIR /app
COPY . /app
RUN pip install poetry
RUN poetry install
RUN poetry update
ENTRYPOINT poetry run uvicorn main:app --reload --host "0.0.0.0"