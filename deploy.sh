#!/bin/bash
REPOSITORY=/home/ubuntu/deploy
cd $REPOSITORY

sudo npm install &&
sudo npm run start &&
sudo pm2 restart til_web