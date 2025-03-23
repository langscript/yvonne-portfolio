Build Steps: 
1. Npm build \
   Run `npm run build`

Release Steps:
1. Login server: \
   `ssh root@43.156.133.232`
2. project path: \
   `/var/html/yvonne`
3. Nginx logs path \
   `/var/log/nginx`
4. Nginx conf path \
   `/etc/nginx/nginx.conf`
5. Transfer file from local to server \
   `cd out` \
   `scp -r . root@43.156.133.232:/var/html/yvonne`
6. Check the expiration date of CA \
   `sudo certbot certificates`