#!/bin/sh
set -e

echo "Running order migrations..."
npm run migration:run --orders

echo "Running notification migrations..."
npm run migration:run --notification

echo "Starting application..."
npm run start:dev