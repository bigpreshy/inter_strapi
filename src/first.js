var inquirer = require("inquirer");
const fse = require("fs-extra");
const main = require("./modules/data.js");
const setting = require("./modules/settings.js");


//let controllermarkup = "modules/data.js";

//const Added = require("index.js");
var questions = [
  {
    type: "input",
    name: "apiname",
    message: "What's your api folder name"
  }
];

inquirer.prompt(questions).then((answers) => {
  let folder = 'api/' + answers.apiname;
  let config = folder + "/config/routes.json";
  let controllers = folder + "/controllers/" + answers.apiname + ".js";
  let models = folder + "/models/" + answers.apiname + ".js";
  let modelSettings = folder + "/models/" + answers.apiname + ".settings.json";
  let services = folder + "/services/" + answers.apiname + ".js";

 
const markup = "./src/modules/markup.js";


  //Handlers /
  main.data.routes[0].handler = answers.apiname + ".find"; 
  main.data.routes[1].handler = answers.apiname + ".count";
  main.data.routes[2].handler = answers.apiname + ".findOne";
  main.data.routes[3].handler = answers.apiname + ".create";
  main.data.routes[4].handler = answers.apiname + ".update";
  main.data.routes[5].handler = answers.apiname + ".delete";

  //Paths
  main.data.routes[0].path = "/" + answers.apiname + "s";
  main.data.routes[1].path = "/" + answers.apiname + "s/count";
  main.data.routes[2].path = "/" + answers.apiname + "s/:id";
  main.data.routes[3].path = "/" + answers.apiname + "s";
  main.data.routes[4].path = "/" + answers.apiname + "s/:id";
  main.data.routes[5].path = "/" + answers.apiname + "s/:id";

  
 setting.settings.collectionName = answers.apiname + "s";
 setting.settings.info.name = answers.apiname;
  let Model = JSON.stringify(setting.settings);
  //Model.split(",").join("\n")
 // console.log(Model);

  let testing = JSON.stringify(main.data);

  fse.ensureDir(folder, (err) => {
    if (err) {
      console.log(err);
    } else {
      fse.outputFile(config, testing, (err) => {});
      fse.outputFile(controllers, "", (err) => {});
      fse.outputFile(models, "", (err) => {});
      fse.outputFile(modelSettings, Model, (err) => {});
      fse.outputFile(services, "", (err) => {});
      fse.copy(markup, controllers, (err) => {}); // copies file
      fse.copy(markup, models, (err) => {});
      fse.copy(markup, services, (err) => {});
      console.log("You have successfully created " + answers.apiname + "api structure");

      ///console.log(main.data.routes[2].path);
     // fse.outputFile("student.json", testing, (err) => {});
    }
  });
});
