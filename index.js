// import chalk from 'chalk';
import _ from "lodash";
import moment from 'moment';
import { nanoid } from 'nanoid'
import express from 'express';
import axios from 'axios';

const app = express()

const users = []

app.get('/', async (req, res) => {
    const response = await axios.get('https://randomuser.me/api/')
    // console.log(response.data)
    const gender = response.data.results[0].gender
    const first = response.data.results[0].name.first
    const last = response.data.results[0].name.last

    const user = {
        gender,
        first,
        last,
        id: nanoid(),
        timestamp: moment().format('LLL')
    }

    users.push(user)

    const newUsers = _.partition(users, (item) => item.gender === 'female')
    const female = users.filter(item => item.gender === 'female')
    const male = users.filter(item => item.gender === 'male')

    res.json({
        female, male
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido http://localhost:${PORT}`)
})