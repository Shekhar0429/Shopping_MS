# this code will run from nginx container from nginx image
# creating container from base image
FROM nginx

# removing default nginx config
RUN rm /etc/nginx/nginx.conf

# copying nginx config
COPY nginx.conf /etc/nginx/nginx.conf