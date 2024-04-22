#!/bin/bash
set -e

set -x
poetry run isort *.py
poetry run black *.py
poetry run flake8 *.py