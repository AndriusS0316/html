import * as fs from "fs/promises";
import hb from "handlebars";

async function main() {
    const html = await fs.readFile("testas.handlebars", {

        const html = "<p>{{vardas}} {{pavarde}}</p>"

        const template = hb.compile(html);

        const zm = [
            {
                vardas: "Jonas",
                pavarde: "Jonaitis"
            },
            {
                vardas: "Petras",
                pavarde: "Petraitis"
            },
            {
                vardas: "Antanas",
                pavarde: "Antanaitis"
            }
        ]

        console.log(template({
            zmones
        }));

    })
}
main();




