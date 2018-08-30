# pm2-test

A startup template for a quick node app development, which requires process management, clustering, and restarting on code changed.

With:

- [pm2](https://github.com/Unitech/pm2)
- [docker](https://www.docker.com/)
- [nodemon](https://github.com/remy/nodemon)
- [express](https://github.com/expressjs/express)

## Development

Create a `.env` file, see details `.env.sample`

```bash
npm i

# start container
npm run up

# list process
npm run pm2:ls

# monitor porcess
npm run pm2:monit

# to get process status
curl localhost:3001 # $PM2_PORT

# test clustering
curl localhost:3000 # $PORT

```