import { app } from "./app.js"

const PORT = 8000

app.set('port', PORT)

app.listen(app.get('port'),()=>[
    console.log(`Server running at http://localhost:${app.get('port')}`)
])