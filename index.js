import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { agregarNotas, eliminarNotas, listarNotas, leerNotas, editarNota } from './utiles/notas.js'


import readline from 'readline';
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});

/* const repetirMetodos = (n) => {
    if (n <= 0) {
        return;
    }

    // Llama los métodos que quieres repetir
    agregarNotas(`Nota ${n}`, `Cuerpo de la nota ${n}`);
    eliminarNotas(`Nota ${n}`);
    listarNotas();
    leerNotas(`Nota ${n}`);
    editarNota(`Nota ${n}`, `Nuevo cuerpo de la nota ${n}`);

    // Llama recursivamente la función para repetir los métodos
    repetirMetodos(n - 1);
};

// Ejemplo de uso: Repetir los métodos 5 veces
repetirMetodos(5); */

function Menu()
{
    console.log("Menu interactivo");
    console.log("1. Agregar nota");
    console.log("2. Eliminar nota");
    console.log("3. Listar nota");
    console.log("4. Ver nota");
    console.log("5. Editar nota");
    console.log("6. Salir");
}

function Iniciar()
{
    Menu();
    rl.question("Ingrese un numero: ", opcion =>
    {
        switch(parseInt(opcion))
        {
            case 1:
                rl.question("Ingrese el titulo de la nota: ", title => 
                {
                    rl.question("Ingrese el cuerpo de la nota: ", body => 
                    {
                        agregarNotas(title, body);
                        Iniciar();
                    });
                });
                break;
            case 2:
                rl.question("Ingrese el titulo de la nota: ", title => 
                {
                    eliminarNotas(title);
                    Iniciar();
                });
                break;
            case 3:
                listarNotas();
                Iniciar();
                break;
            case 4:
                rl.question("Ingrese el titulo de la nota: ", title =>
                {
                    leerNotas(title);
                    Iniciar();
                });
            case 5:
                rl.question("Ingrese el titulo de la nota: ", title => 
                {
                    rl.question("Ingrese el cuerpo de la nota: ", body => 
                    {
                        editarNota(title, body);
                        Iniciar();
                    });
                });
                break;
            case 6:
                rl.close();
                console.log("Saliendo...");
                break;

        }
    });
}

Iniciar();

/* yargs(hideBin(process.argv))
    .command
    ({
        command: 'agregar',
        describe: 'Agregar nota',
        builder: {
            title: {
                describe: "Titulo de la nota",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Cuerpo de la nota",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv)
        {
            agregarNotas(argv.title, argv.body);
        }
    })
    .command
    ({
        command: 'eliminar',
        describe: 'Eliminar una nota',
        builder: {
            title: {
                describe: "Titulo de la nota",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv)
        {
            eliminarNotas(argv.title);
        }
    })
    .command
    ({
        command: "ver",
        describe: "Lista de notas",
        handler()
        {
            listarNotas();
        }
    })
    .command
    ({
        command: 'leer',
        describe: 'Leer una nota',
        builder: {
            title: {
                describe: "Titulo de la nota",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv)
        {
            leerNotas(argv.title);
        }
    })
    .command
    ({
        command: 'editar',
        describe: 'Editar nota',
        builder: {
            title: {
                describe: "Titulo de la nota",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Cuerpo de la nota",
                demandOption: true,
                type: "string"
            }
        },
        handler(argv)
        {
            editarNota(argv.title, argv.body);
        }
    }).parse(); */