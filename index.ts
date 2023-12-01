import figlet from "figlet";

const PORT = 3000

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url)

    if (url.pathname === '/') {
      return new Response(figlet.textSync("Home"))
    }

    if (url.pathname === '/about') {
      return new Response(figlet.textSync("About Me"))
    }

    if (url.pathname === '/project') {
      return new Response(figlet.textSync("My Project"))
    }

    if (url.pathname === '/contact') {
      return new Response(figlet.textSync("Contact Us"))
    }

    if (url.pathname === '/squel') {
      throw new Error("Could not fetch \"SQUEL\"")
    }

    if (url.pathname === '/greet') {
      return new Response(Bun.file('./greet.txt'))
    }

    return new Response(figlet.textSync("Not Found 404"))
  },
  error(err) {
    return new Response(`<pre>${err}\n${err.stack}</pre>`, {
      headers: {
        'Content-Type': 'text/html'
      }
    })
  }
})

console.log(`Application starting on http://localhost:${PORT}`)
