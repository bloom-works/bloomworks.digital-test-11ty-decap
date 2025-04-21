set -e

echo "*** BUILD DOCKER IMAGE ***"
sh build-image.sh

echo "*** INSTALL NODE.JS DEPENDENCIES ***"
sh install-deps.sh

echo "*** BUILD WEB SITE ***"
sh build-site.sh