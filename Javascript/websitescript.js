s_include conf.d/header_logging.js;             # Load JavaScript code from here
js_set     $access_log_with_headers kvAccessLog; # Fill variable from JS function
log_format kvpairs $access_log_with_headers;     # Define special log format

server {
    listen 80;
    access_log /var/log/nginx/access_headers.log kvpairs;
    location / {
        proxy_pass http://www.example.com;
    }
}
