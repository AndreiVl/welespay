FROM nginx:alpine
ADD files/ /usr/share/nginx/html/
ADD build/ /usr/share/nginx/html/
