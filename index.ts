import figlet from "figlet";

const PORT = 3000

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const resBody = figlet.textSync("My name is Prasetyo")

    return new Response(resBody)
  }
})

console.log(`Application starting on http://localhost:${PORT}`)
