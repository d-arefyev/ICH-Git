FROM debian:stable-slim
RUN apt-get update && apt-get install -y curl
COPY fetch_data.sh /usr/local/bin/fetch_data.sh
RUN chmod +x /usr/local/bin/fetch_data.sh
WORKDIR /usr/src/app
ENV URL=https://api.coindesk.com/v1/bpi/currentprice.json
ENV OUTPUT_FILE=/data/price.json
VOLUME [ "/data" ]
CMD ["/usr/local/bin/fetch_data.sh"]
