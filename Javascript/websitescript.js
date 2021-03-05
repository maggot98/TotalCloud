js_include conf.d/header_logging.js;             
js_set     $access_log_with_headers kvAccessLog; 
log_format kvpairs $access_log_with_headers;     

server {
    listen 80;
    access_log /var/log/nginx/access_headers.log kvpairs;
    location / {
        proxy_pass http://www.example.com;
    }
}
