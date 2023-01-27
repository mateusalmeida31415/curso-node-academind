const handlerRoute = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      "<html><head><title>Olá Mundo</title></head><body><h1>Seja bem-vindo ao nosso site</h1><form action='/create-user' method='POST'><input type='text' name='username'></input><button type='submit'>Enviar</button></form></body></html>"
    );
    return res.end();
  } else if (url === "/user") {
    res.write(
      "<html><head><title>Olá Mundo</title></head><body><h1>Seja bem-vindo ao nosso site</h1><ul><li>João</li><li>Mateus</li><li>Marcos</li></ul></body></html>"
    );

    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const username = parseBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }

  res.write(
    "<html><head><title>Olá Mundo</title></head><body><h1>Erro! Caminho não encontrado!</h1></body></html>"
  );

  res.end();
};

module.exports = handlerRoute;
