#!/usr/bin/env bash
#/etc/init.d/garage-opener

cd /root/code/garage-opener
git pull
/root/.nvm/versions/node/v6.4.0/bin/node lib/cli.js
