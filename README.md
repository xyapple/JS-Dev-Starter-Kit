Setup a Javascript Development Environment Starter Kit

1. node is preinstalled (check 'node -v') v6.10.3
2. Run npm init then create a package.json in the folder
3. Run npm install -g nsp (Node security Platform); 'nsp check'
4. Install Web server(Install Express) or if choose the Webpack which include Webpack Dev Server.
* complete setup the express--tools/srcServer.js
* Add src/index.html
* node tools/srcServer.js
5. Share Work-in-progress on public server (WoW, I can do that now...Without setting up the AWS, nginx, Azure, etc)
* Now; Ngrok; Localtunnel; Surge
* try localtunnel
    a). npm install localtunnel -g
    b). run local server first(node tools/srcServer.js)
    c). run localtunnel (lt --port 3000)
    d). get a url: (https://bpvwgrqkdw.localtunnel.me); share the url to anyone but local server must be open







Reference:
Building a JavaScript Development Environment by Cory Hose (Pluralsight course)
Setting Up a React.js Environment Using Npm, Babel 6 and Webpack (https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr)
