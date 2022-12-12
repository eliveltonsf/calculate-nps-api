 <h5 id="title" align="center"><img style="width: 300px; height:200px;" src="https://uploaddeimagens.com.br/images/004/256/229/original/27223464.jpg?1670789591"/>
 </h5>

<h1 id="title" align="center">Net Promoter Score 📈</h1>

<h4 align="center"></h4>

<h3 id="description" align="center">
  This is a resource that covers terms of results through an NPS (Net Promoter Score), calculated based on the answers to a single question: How likely are you to recommend our company / product / service to a friend or colleague?
  The score for this answer is most often based on a scale of 0 to 10.
</h3>


<p id="badges" align="center">
<img src="https://shields.io/badge/-Node.JS-05122A?style=for-the-badge&logo=node.js"/>
<img src="https://shields.io/badge/-JavaScript-05122A?style=for-the-badge&logo=javascript"/>
<img src="https://shields.io/badge/-Typescript-05122A?style=for-the-badge&logo=typescript"/>
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"/>
</p>

* [Title and image](#title)
* [Description](#description)
* [Badges](#badges)
* [Status of project](#status)
* [Project's goal](#objective)
* [Functionalities](#functionalities)
* [Prerequisites](#prerequisites)
* [Application Demonstration](#application)
* [Test](#test)
* [Demo](#demo)
* [Technologies](#techonologies)

<br />

<h4 id="status" align="center">
  Project README 🚀 Finished ✔️
</h4>

<br />

<h2 id="objective" name="objective">
🎯 Project's goal
</h2>

I created an API to register users and a search to assign it to their registrations, sending an email and waiting for a response to then perform the nps calculation, as well as putting into practice my knowledge of javascript concepts, nodejs, express, typeorm and tests with jest and good coding practices.

<br />

<h2 id="functionalities" name="functionalities">
📋 Functionalities
</h2>

* [x] - Register user
* [x] - Register survey for answer
* [x] - Assign a survey to a user
* [x] - Calculate NPS after user response

<br />

<h2 id="prerequisites" name="prerequisites">
⌨️ Prerequisites
</h2>

Before starting, you will need to have the following tools installed on your machine: [git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/) e [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).
Furthermore it is recommended to use an editor to work with the code as [VSCode](https://code.visualstudio.com/download).

#### :tada: Start the project and generate the database


```bash
# Clone the repository in some directory of your computer
$ git clone https://github.com/eliveltonsf/calculate-nps-api.git

# Enter in the repository
$ cd calculate-nps-api

# Install the dependencies
$ yarn install

# Start the backend
$ yarn dev
```


#### :wrench: generate the migrations and create the tables in the database


```bash
# Generate the migration, which are scripts for creating the database
$ yarn typeorm:migration:generate

# Generate all structure created by migrations in the database
$ yarn typeorm:migration:run

# Start the backend
$ yarn dev
```
<br/>
<h2 id="application" name="application-demonstration">
▶️ Application Demonstration
</h2>

#### :gear: You can test the API

- [ ] Install Insomnia Core - <a href="https://insomnia.rest/download/"> Download </a>

- [ ] After installing, download the request structure created for insomina. <a href="https://raw.githubusercontent.com/eliveltonsf/calculate-nps-api/main/src/assets/calculate-nps-api.json?raw=true"> calculate-nps-api.json </a>

- [ ] Install beekeeper studio <a href="https://www.beekeeperstudio.io/get"> Download</a>, to connect with the database and have data visibility.

<blockquote>
  Importing the json link into insomnia:
  <br />
load the Insomnia_project_task.json file
<br />
<br />
<img src="https://uploaddeimagens.com.br/images/004/256/317/original/import_url_insomnia.jpeg?1670804205">
<br />
</blockquote>
<br />

#### :vertical_traffic_light: Routes

The server will start at port 3333, every request is sent by parameters to the back end, either by insomnia or in a web application, always taking into account the rules developed in the routes

##### List Users

<blockquote>
http://localhost:3333/users
</blockquote>

##### Create Users

<blockquote>
http://localhost:3333/users
</blockquote>

```json
{
	"name": "name",
	"email": "email@mail.com"
}
```

##### List Surveys

<blockquote>
http://localhost:3333/surveys
</blockquote>
```

##### Create Surveys

<blockquote>
http://localhost:3333/surveys
</blockquote>

```json
{
	"title" : "Avaliação",
	"description" :"O quanto você nos recomendaria?"
}
```

##### List SendMail

<blockquote>
http://localhost:3333/sendMail
</blockquote>
```

##### Create SendMail

<blockquote>
http://localhost:3333/sendMail
</blockquote>

```json
{
	"email": "email@mail.com",
	"surveyId": "fa61ba30-9c32-4e1b-bbe2-99f4e1940313"
}
```

▶️ How to answer the survey

#### when the sendMail request is created by insomnia, the nodemailer generates an access link to the sent email loading the template created by handlebars

<h5 id="title" align="center"><img src="https://uploaddeimagens.com.br/images/004/256/322/original/sendMail-link-mail.png?1670805495"/>
 </h5>
 <br />

#### on the email page you will have access to the following tel, where you will have an evaluation to be answered
<h5 id="title" align="center"><img src="https://uploaddeimagens.com.br/images/004/256/333/original/mail.png?1670806054"/>
</h5>
<br />

#### After the evaluation response you will receive a confirmation in a json that the value has been assigned.
<h5 id="title" align="center"><img src="https://uploaddeimagens.com.br/images/004/256/336/original/valor-confirmado.png?1670806656"/>
</h5>
<br />

##### Calculate NPS

<blockquote>
http://localhost:3333/nps/"survey_id"
</blockquote>

<br />

<h2 id="test" name="prerequisites">
✅ Test
</h2>

#### :rotating_light: Integration test with jest

```bash
# run integration test
$ yarn test
```
<br />

<h2 id="demo" name="demo">
🎥 Demo
</h2>
<img src="https://github.com/eliveltonsf/calculate-nps-api/blob/0db05895408613479c3932d8d14c7844826add84/src/assets/calculate-nps-api.gif?raw=true"/>


<br />
<h2 id="techonologies" name="technologies">
🚀 Technologies
</h2>

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/)
- [Yarn](https://yarnpkg.com/)
- [Sqlite](https://www.sqlite.org/index.html)
- [uuid](https://sucrase.io/)
- [Yup](https://www.npmjs.com/package/uuid)
- [Nodemailer](https://nodemailer.com/about/)
- [Handlebars](https://handlebarsjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

<br />

<hr>

Made with 🧡 By Elivelton Ferreira. [Get in touch!](https://www.linkedin.com/in/eliveltonsf/) :calling:
