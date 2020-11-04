# MakeHandler - The Easiest Way To Make Command Handlers

### Topics
* [How To Use](#how-to-use)
* [Code Templates](#code-templates)
* [FAQ](#faq)

### How To Use

###### MakeHandler - Last Proud Of Rhino Inc.

> Rhino Inc. is a small company that was created by Arda Karagöz. Rhino Inc. contains Coding programs, Code Projects, Discord Bots etc. Rhino Inc. has small enviroment to know but its knowledge by others will be increase in next months.


> Arda Karagöz is a 15 year old Half Developer. I am from Turkey and I want to be a software engineer. I know a lot about JavaScript and Python and also I know C#, C++, Java, HTML and CSS. I am the founder of Rhino Inc. I created lots of projects but the bests are: Rhino Bot(About 600K Users 400 Guilds - The Most Useful Turkish Bot), rhino-api(This Module. Helps you in math problems and daily fun codes), MasterG Bot(A Great Private Discord Bot For Our Server), Mental Power Discord Bot Tutorial(It will go more than +40 Eps), Github Markdown Repo(Will be published in few weeks.) and more...

#### What is This?

This is a great module for handling your files in an easily and shorter way. It has only three codes but it allows you to don't spend too much time for handling your commands. The main meaning of this module is helping people. This is really short and basic module for your codes. It usually useful for your Discord Bots or GitHub Repos. But it can be change by your creativeness.

</br>
You can make variable like this.

```js
const Handler = require('makehandler')
const handler = new Handler()
```

#### Basic Codes

##### Setting A Folder

```js
handler.read("commands")
```

As you can see this is SO EASY!!!

If you want options you can add file type as if you wanted like these

```js
handler.read("commands", "ts")
```

If You Know How to make TypeScript Exports files you can write like these. If there is nothing it will count as js.

##### Check If The Command Has In Handler

For example in your Discord Bot You Can Explain Arguments Like These:

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"
client.on('message', message => {
  if (message.content.startsWith(prefix/*Prefix*/)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();
  }
})

client.login('TOKEN')
```

As You See you can make arguments like this. And Do You Want to Check If The Command Is in Your Handle.

```js
if (!handler.check(command)) return;
```

#### Running A Command

So, the main thing in our module. If You Want to run handler commands you can make it like these.

```js
handler.work(command)
```

So This Is An Easy Way To Work A Command. If You Want for Discord:

```js
handler.work(command, client, message, args)
```

SO That can work for Discord Commands.

#### THATS ALL

Thanks for reading how to use part.

### CODE Templates

If You Want To See Code Templates You Can See This File:

[CLICK](https://github.com/ardakaragoz/makehandler/test.js)

And Do You Be Curious About Command Files? Let's See!

You Should Create Files in your selected folder and make it like this:

```js
module.exports = {
  code: "hello",
  async run(client, message, args){
    message.reply('Hello You To Bro!')
  }
}
```

### FAQ

#### How To Change Command Files' Selector Other Than "code"

Well that is not can be changed in your file but if you come to module folder you will see **index.js** Click And Go To 14<sup>th</sup> line and you will see this:

```js
return this.commands.set(command.code, command); // Komutları Ayarlıyoruz.
```

as you see you can change it like This

![](https://cdn.discordapp.com/attachments/765653249578631178/773616343190470666/2020-11-04-21-33-17.gif)

#### Support

You Can Write Me For Wantings And Complains By

>ahmetarda2006@hotmail.com.tr - via E-Mail
>`${FleeingRhino}`#1923 - via Discord
>Issues On Github https://github.com/ardakaragoz/makehandler/

#### THANKS

Thanks for using my module in your PC. Have a nice day!

RHINO INC. INDUSTRY
