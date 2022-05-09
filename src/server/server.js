import { createServer } from "miragejs"

export default function(){
    createServer({
        routes(){
            this.get('api/students', () => ({
                students:[
                    { id: 1, name:"Student1", dob:"01/01/1999", city:"Riverwoods", state:"Illinois", zip:60001 },
                    { id: 2, name:"Student2", dob:"01/01/1989", city:"Riverwoods", state:"Illinois", zip:60001 }
                ]
            }))
        }
    })
}