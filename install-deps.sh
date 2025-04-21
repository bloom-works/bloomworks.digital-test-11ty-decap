set -e

docker run --rm -it -p 8080:8080 -v $(pwd)/11ty:/app bloom-11ty bash -c ". ~devuser/.nvm/nvm.sh && npm install"