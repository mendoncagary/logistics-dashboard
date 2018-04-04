# `logistics dashboard` — Golang, Nodejs, Angular

The application contains features like:
1. Local System Health
2. List Devices
3. Type 1 Data
4. Geo OverSpeeding
5. Geo Dwell
6. Stationary FIlter

## Getting Started

To get you started you can simply download and extract the `logistics-dashboard` repository and install the dependencies:

### Prerequisites

You must have Node.js and its package manager (npm) installed. You can get them from [here][node].

### Download `logistics-dashboard`

Extract the `logistics-dashboard` repository using zip:

### Folder Structure

Once extracted, there will be two folders and a README.md file: 
1. 'web-app' which is the angular app
2. The 'logistics-dashboard' folder contains server side nodejs code
3. README contains instruction about the setup


### Setup

#### Level 1 - `Server and Client key generation`

Inside the 'server' folder there is a makecert.sh script which generates the server as well as the client keys and stores it in certs folder.
The script works with Git Bash. I have not tested it with Linux. For Linux, you might have to change the certificate subject 'slashes' if it gives error. 

```
./makecert.sh
```
#### Level 2 - `Go clients, Nodejs Server`

1. The nodejs https API server as well as the tls server are part of one application and located in app.js file. To start the servers:

```
npm install
npm start
```
or 

```
npm install
node app.js
```

This will start the server on localhost


2. The go clients are located in client1 and client2 folders respectively.

```
cd client 1
go run main.go
```
```
cd client 2
go run main.go
```

*This will start the clients and emit data to the server. The nodeJS server is connected to the mongodb instance in the cloud. So no setup is required.* 

To start the Angular app,
```
cd web-app
npm install
npm start
```

Now browse to the app at [`localhost:4200`][local-app-url].

This completes the setup.


### Issues

I tried completing all tasks possible in the test, but due to the lack of time, I could not get the `stationary filter` and the `geo overspeeding` to work. 


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:4200
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
