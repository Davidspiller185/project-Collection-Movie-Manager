import fs from 'fs'
import { json } from 'stream/consumers'
 export function readfileAsJson(callback) {
    fs.readFile("../movies.json", "utf-8", (err, data) => {
        if (err) return console.log(err.message)
        try {

            console.log(JSON.parse(data));
        } catch (error) {
            console.log('File content is not a Json')
        }
    })
}

 export function writefile(content) {
    fs.writeFile("data/movies.json", JSON.stringify(content), (err) => {
        if (err) return err.message
        console.log("succsses")
    })
}

