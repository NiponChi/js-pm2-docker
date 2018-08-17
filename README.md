# pm2-test

A startup template for a quick node app development, which requires process management, clustering, and restarting on code changed.

With:

- [pm2](https://github.com/Unitech/pm2)
- [docker](https://www.docker.com/)
- [nodemon](https://github.com/remy/nodemon)
- [express](https://github.com/expressjs/express)

## Development

Create a `.env` file, see details `.env.sample`

To run the app locally

```bash
npm i

# run without pm2
npm run dev

# run with pm2
pm2-runtime start pm2.json --web 3001
````

To start to app in container mode

```bash
docker-compose up
```

To test process restarting, use `/die`. the process will be crashed and pm2 should restart the process after that

```bash
curl localhost:3000/die
```

To get process info

```bash
curl localhost:3001
```