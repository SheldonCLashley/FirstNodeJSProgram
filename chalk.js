const chalk = require('chalk');
const log = console.log; 
const MrRGB =  chalk.rgb(255, 10 , 0)("R") + chalk.rgb(0, 255, 0)("G") + chalk.rgb(0, 0, 255)("B");

log(chalk.white("A long time ago..."));
log(chalk.white("In the small town of " + chalk.underline.yellow("Lumbridge") + " which was surrounded by many " + chalk.green("trees and forests")));
log("There lived many people, however unlike you or I they were " + chalk.blue("blue!"));
log("Despite being surrounded by beautiful " + chalk.green("forest and trees") + " they thought they lived in a " + chalk.bgBlue("blue world!"));
log(chalk.bgYellow.black("And all day") + chalk.reset(", ")+ chalk.bgBlackBright("and all Night") + " all they see is " + chalk.blue("blue."));
log("They own " + chalk.blue("blue houses") + " and blue " + chalk.blue("Corvettes") + " and everything else is " + chalk.blue("blue for them!"));
log("That was until they met Mr. " + MrRGB + " who was extremely colorful!");
log("He taught the " + chalk.blue("blue") + " people about the other colors!");
log("He taught them of " + chalk.magenta("magenta") + " he tought them of " + chalk.cyan("cyan") + " and even of " + chalk.gray("gray!"));
log("Not only the " + chalk.blue("front") + " but also the " + chalk.bgBlue("back") + " he taught them of " + MrRGB + " and even " + chalk.hsv(32, 100, 100)("hsv") + "(whatever that is)");
log("And so the " + chalk.blue("blue") + " people learned to be " + chalk.green("Colo") + chalk.blue("rful!"));