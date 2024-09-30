#!/bin/bash

URL="https://api.coindesk.com/v1/bpi/currentprice.json"
OUTPUT_FILE="/data/price.json"

curl -o $OUTPUT_FILE $URL
echo "Data has been saved to $OUTPUT_FILE"