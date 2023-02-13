#!/bin/zsh

ng build --configuration production --output-path docs
touch docs/CNAME && echo "javierverb.com" > docs/CNAME
git add .
git commit -am 'updated frontend'
git push origin master
