import * as ftp from "basic-ftp";
import * as fs from "fs";

example();

async function example() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: "47.94.17.192",
      password: "gagobigdata",
      port: 1021,
      // secure: true,
      user: "gago"
    });
    await client.cd("data");
    // tslint:disable-next-line:no-console
    console.log(await client.list());
    await client.upload(fs.createReadStream("README.md"), "README.md");
    await client.cd("/");
    await client.downloadDir(`${__dirname}`);
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  }
  client.close();
}
