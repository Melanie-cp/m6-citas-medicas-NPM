import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid'
import moment from 'moment';
import _ from "lodash";
import axios from 'axios';


// console.log(chalk.blue('Hello world!'));

// const id1 = uuidv4()
// const id2 = nanoid()
// const id3 = uuidv4()

// console.log(chalk.green(id1));
// console.log(chalk.red(id2));
// console.log(chalk.bgYellow(id3));

// moment.locale('es'); //configurarlo a español
// console.log(moment().format('LLL'))
// console.log(moment().format('llll'))

//lodash
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const maximo = _.max(numeros) //devuelve el numero mas grande
// console.log(maximo)
//divide en dos arrays los pares y los impares
// const numeros = [1, 2, 3, 4, 5, 6]
// console.log(_.partition(numeros, (n) => n % 2))

// axios
const obtenerInformacion = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const data = await response.json()
    // console.log(data)

    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/1')
        console.log(response.data.name, response.data.species)
    } catch (error) {
        console.log(error.message)
        console.log(error.response.status)
        console.log(error.response.statusText)
    }

}
obtenerInformacion()