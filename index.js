const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const Discord = require('discord.js')

class Handler {
  constructor() {
    this.commands = new Discord.Collection()
  }
  read(folder, type = "js"){
    if (!folder) throw new Error("Cannot Find Folder That You Want to Handle");
const commandFiles = readdirSync(join(__dirname, folder)).filter(file => file.endsWith("." + type ? "js" : type)); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.
for (const file of commandFiles) {
    const command = require(join(__dirname, folder, `${file}`));
    return this.commands.set(command.code, command); // Komutları Ayarlıyoruz.
}
  }
  check(cmdname){
    const isitthere = new Map()
    if(this.commands.has(cmdname)) {
      isitthere.set("There", true)
    }
    else {
      isitthere.set("There", false)
    }
    let value = isitthere.get("There")
    return value;
  }
  work(cmd, client = null, message = null, args = null){
    if(!this.commands.has(cmd)) throw new Error("Are You Sure You Have That Command?")
    return this.commands.get(cmd).run(client, message, args)
  }
}

module.exports = Handler
