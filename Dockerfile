# Use the current LTS version of Ubuntu as the base image
FROM ubuntu:24.04

# Set environment variables
ENV APP_USER="devuser"
ENV NODE_VERSION="22.14.0"
ENV NVM_VERSION="0.40.2"
ENV HOME_DIR="/home/${APP_USER}"
ENV NVM_DIR="${HOME_DIR}/.nvm"
ENV SOURCE_NVM=". ${HOME_DIR}/.nvm/nvm.sh"

# Set build arguments with default values
ARG GROUP_ID=1000

# Install necessary dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \ 
    ca-certificates

# Create a non-root user using the build arguments
RUN useradd --gid $GROUP_ID --shell=/bin/bash --create-home $APP_USER

# Switch to the non-root user
USER $APP_USER

# Download and install nvm:
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash


# Download and install Node.js:
RUN $SOURCE_NVM && nvm install ${NODE_VERSION}

# Set nvm to use the installed version
RUN $SOURCE_NVM && nvm use ${NODE_VERSION}

# Create app directory
WORKDIR /app

# Copy 11ty files into the container
COPY --chown=${APP_USER} ./11ty/. .

# Install project dependencies as the non-root user
RUN $SOURCE_NVM && npm install

# Expose the port that 11ty uses for development (default is 8080)
EXPOSE 8080

# Command to run the 11ty development server as the non-root user
CMD ${SOURCE_NVM} && npx @11ty/eleventy --serve --port=8080 --incremental