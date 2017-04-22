FROM ubuntu:16.04

RUN apt-get update && \
  apt-get -y dist-upgrade && \
  apt-get -y install openssh-client curl git

# Install mooseca binary dependencies
RUN apt-get -y install libmp3lame-dev

# Install NodeJS and NPM
# See https://github.com/nodesource/distributions
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# # Install NVM (Node Version Manager
# # See https://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-for-node-js-on-ubuntu-14-04-lts/
# RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash

# Create user "jenkins"
RUN id jenkins 2>/dev/null || useradd --uid 1000 --create-home jenk
# EOF
