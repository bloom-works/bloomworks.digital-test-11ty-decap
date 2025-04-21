set -e

rm -rf 11ty/_site
docker run --rm -it -p 8080:8080 -v $(pwd)/11ty:/app bloom-11ty bash -c ". ~devuser/.nvm/nvm.sh && npx @11ty/eleventy"