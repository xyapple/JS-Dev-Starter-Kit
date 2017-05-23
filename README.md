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
    e). quit by ctl+C; setup a subdomine(lt --port 3000 --subdomine xyapple)
    f). get a url:(https://xyapple.localtunnel.me)
6. Setup Automation (Grunt Vs Gulp Vs npm Scripts)
* Try npm scripts
    - Add startMessage.js in tools for prestart automation
    - Setup Automation in package.json
    ```
    "scripts": {
      "prestart":"node tools/startMessage.js",
      "start": "node tools/srcServer.js",
      "security-check":"nsp check",
      "localtunnel": "lt --port 3000"
    },
    ```
    - Setup parallel tasks for the Automating the start and security-check
    ```
    "scripts": {
      "prestart":"node tools/startMessage.js",
      "start": "npm-run-all --parallel security-check open:express",
      "open:express":"node tools/srcServer.js",
      "security-check":"nsp check",
      "localtunnel": "lt --port 3000"
    },
    ```
    - Setup parallel tasks for the start and localtunnel
    ```
    "scripts": {
      "prestart":"node tools/startMessage.js",
      "start": "npm-run-all --parallel security-check open:express",
      "open:express":"node tools/srcServer.js",
      "security-check":"nsp check",
      "localtunnel": "lt --port 3000",
      "share":"npm-run-all --parallel open:express localtunnel"
    },
    ```
    - if I need to run automation, i need to 'npm run share'
7. Setup Transpiler (Babel Vs TypeScript Vs Elm)
* create a .babelrc under in the root of file
* in .babelrc file write
```
{
  "presets":[
    "latest"
  ]
}
```
* Update the scripts
```
  "prestart":"babel-node tools/startMessage.js",
```
* Note: if not to create the .babelrc file, I can just use package.json
```
"babel":{

}
```
8. Setup Bundle
* but why?(Because there are 5 models in the JS words + package project into file/s)
-- IFE Vs AMD Vs CJS Vs UMD Vs ES6
* ES6!!
* browserify Vs. Webpack Vs. Rollup Vs. JSPM
* Webpack!!
  a). Setup the .webpack.config.dev.js file in the root
  b). Configure webpack with express(web server) in the srcServer.js
  c). create a index.js file in the src folder to test the webpack
  d). update the index.html to include the index.js
9. Setup Linter
* ESLint!


Reference:
Building a JavaScript Development Environment by Cory Hose (Pluralsight course)
Setting Up a React.js Environment Using Npm, Babel 6 and Webpack (https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr)
