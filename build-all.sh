set -e

echo "*** BUILD DOCKER IMAGE ***"
sh build-image.sh

echo "*** INSTALL NODE.JS DEPENDENCIES ***"
sh install-deps.sh

echo "*** BUILD WEB SITE ***"
docker run --rm -it -p 8080:8080 -v $(pwd)/11ty:/app bloom-11ty bash -c ". ~devuser/.nvm/nvm.sh && npx @11ty/eleventy"