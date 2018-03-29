#! /bin/sh

hexo clean
hexo g
gulp build
hexo d
hexo s -p 80 &
