#!/bin/zsh

ng build --configuration production --output-path docs
git add .
git commit -am 'updated frontend'
git push origin master
