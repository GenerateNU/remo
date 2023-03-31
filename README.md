# ReMo

### Starting our database and backend server
1) While in the main `remo` directory, run `docker compose up db` to start up the database service.
2) Install `taskfile` with homebrew (`brew install go-task`) or visit `taskfile` [documentation](https://taskfile.dev/installation/)
3) Navigate to `remo/remo-backend` and run `task run` to start the backend Gin server on `localhost:8080`
4) Sign up for and install `ngrok` with `brew install ngrok/ngrok/ngrok` or visit `ngrok` [documentation](https://ngrok.com/download)
5) Run `ngrok http --region us --inspect=false 8080` to tunnel the server to a globally accessible IP

### Starting our client 
1) Visit the `expo` [documentation](https://docs.expo.dev/get-started/installation/) and follow the installation instructions.
2) When prompted to login at the CLI, use `username: andrew10` and `password: Andrew10`
3) Run `npm install` from the `remo/remo-client` directory to install all build dependencies
4) Copy and paste the `ngrok` command output url into the `remo-client/services/api_links.tsx` file for the `API_URL`, along with the endpoint url in the `GoogleSSO.tsx` and `Register.tsx` files
5) Run `npm start` to start the app
6) Download the `expo` mobile app and login with the same credientials as above to start the app
