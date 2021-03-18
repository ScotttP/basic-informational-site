let http = require("http");
let url = require("url");
let fs = require("fs");

// let link = "http://localhost:8080/";
// let q = url.parse(link, true);
// console.log(q);

http
	.createServer((req, res) => {
		let q = url.parse(req.url, true);
		let filename = `.${q.pathname}`;

		if (q.pathname === "/" || q.pathname === "/index.html") {
			fs.readFile("index.html", (err, html) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(html);
				return res.end();
			});
		} else if (q.pathname === "/about.html") {
			fs.readFile(filename, (err, html) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(html);
				return res.end();
			});
		} else if (q.pathname === "/contact-me.html") {
			fs.readFile(filename, (err, html) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(html);
				return res.end();
			});
		} else {
			fs.readFile("404.html", (err, html) => {
				res.writeHead(400, { "Content-Type": "text/html" });
				res.write(html);
				return res.end();
			});
		}
	})
	.listen(8080);
