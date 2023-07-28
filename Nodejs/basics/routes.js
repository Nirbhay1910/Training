const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html><head><title>My first Page</title></head><body>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form>'
    );
    res.write("</body></html>");
    return res.end(); //Needs to return it so that it does not execute below code as after res.end we cant write anything
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      //event listener on when data is coming // mainly in chunks
      // console.log(chunk);
      body.push(chunk); //collecting all chunks
    });
    return req.on("end", () => {
      const parsedData = Buffer.concat(body).toString(); //Buffer is like bus stop where all chunks of data waits to be processed and finally converting buffer into string
      //toString as we know input is text
      // console.log(parsedData);
      const message = parsedData.split("=")[1];
      // fs.writeFileSync("message.txt", message);//this will block the execution till it is completed. Hence, not good
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; /// means redirection
        res.setHeader("Location", "/"); //redirects to '/'
        return res.end();
        // As we want to run these lines once file is created
      });
    });
    // res.statusCode = 302; /// means redirection
    // res.setHeader("Location", "/"); //redirects to '/'
    // return res.end();
  }
  res.write(
    "<html><head><title>My first Page</title></head><body><h1>Hello Nodejs</h1></body></html>"
  );
  res.end(); // We should not write anything after that
};

module.exports = {
  handler: requestHandler,
  text: "sometext",
};
