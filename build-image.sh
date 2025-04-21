set -e

rm -rf 11ty/_site
rm -rf 11ty/node_modules
docker build --build-arg GROUP_ID=$(id -g) -t bloom-11ty .
