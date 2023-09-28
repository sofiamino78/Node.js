import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log(chalk.bold("❤️​ To Do App❤️​"));
    console.log(chalk.blueBright("Menu de Opciones:"))
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Salir");
    console.log("\n")
}

function addTask() {
    rl.question(chalk.bgMagenta("Escribe la tarea: "), (task)=> {
        tasks.push({task: task, completed: false});
        console.log(chalk.green.bold("Tarea agregada con éxito  \n"));
        displayMenu();
        chooseOption();
    });
}

function listTasks() {
    console.log(chalk.red.bold("\n❤️  ​Tareas❤️\n"));
    if (tasks.length === 0) {
        console.log(chalk.green("No tienes tareas por hacer ​🙂  \n​"));
    } else {
        tasks.forEach((task, index)=>{
            let status = task.completed ? "✅​" : "❌​";
            console.log((`${index + 1}. ${status} - ${task.task} \n`))

        });
    }
    displayMenu();
    chooseOption();
}

function completeTask() {
    rl.question(chalk.bgMagenta("Escribe el número de la tarea a completar: "), 
    (taskNumber) => {
        const index = parseInt(taskNumber) - 1;
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            console.log(chalk.green.bold("Tarea marcada con éxito ✅  \n"));
        } else {
            console.log(chalk.red.bold("Número de tarea inválido ❌  \n"));
        }
        displayMenu();
        chooseOption();
    });
}

function chooseOption() {
    rl.question("Elige una opción: ", (choice) => {
        switch (choice) {
            case "1": 
                addTask();
                break;
            case "2": 
                listTasks();
                break;
            case "3": 
                completeTask();
                break;
            case "4": 
                console.log(chalk.yellow("Adiós👋​"));
                rl.close();
                break;
            default:
                console.log(chalk.red("Opción inválida. Intenta nuevamente  \n"));
                displayMenu();
                chooseOption();
                break;
        }
    });
}


displayMenu();
chooseOption();