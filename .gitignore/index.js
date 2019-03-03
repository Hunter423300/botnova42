const Discord =  require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

var prefix = ">";

var dispatcher;

client.log(process.env.TOKEN)

client.on("ready", () => {
  client.user.setGame('>help || ђยภtєг / ן๏г๔คภภє', 'https://www.twitch.tv/fidelio5040');
console.log("Je suis connecté")
});


client.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "《🎗》général").send(`Bienvenue ${member} sur la 🔪 𝐻𝓊𝓃𝓉𝑒𝓇 Zone 🔪`);
member.addRole('548629307308900352')
})

client.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "《🎗》général").send(`Good bye ${member.user.username} Tu nous manquera pas :D !`)
})


client.on("message", message => {

if(message.content === prefix + 'déconnexion') {
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ❌")
        message.channel.send('**Deconnexion en cours...**')
        message.delete().then(client.destroy())
  }

})

client.on("message", message => {

if (message.content === prefix + "help") {    	
    var oembed = new Discord.RichEmbed()
    .setDescription("Pour pouvoir avoir de l'aide sur une commande tapez `>help <commande>`")
    .setTitle("Liste des commandes - (6)")
    .setColor('0E07FA')
    .addField("Fun - (1) ", "`8ball`")
    .addField("Général - (1)", "`info`")
    .addField("Modération - (4)", "`kick`, `ban`, `clear`, `mute`")
    .setFooter("Nova")
    .setTimestamp()
    message.channel.sendEmbed(oembed)
  
   }

if (message.content === prefix + "help kick") {    	
    var oembed = new Discord.RichEmbed()
    .setDescription("**Description :** , Permet de kick un utilisateur.")
    .setTitle("Commande : kick")
    .setColor('0E07FA')
    .addField("Utilisation", ">kick @user")
    .addField("Exemple", ">kick ђยภtєг / ן๏г๔คภภє")
    .setFooter("Nova")
    .setTimestamp()
    message.channel.sendEmbed(oembed)
  
   }

if (message.content === prefix + "help ban") {    	
    var oembed = new Discord.RichEmbed()
    .setDescription("**Description :** Permet de ban un utilisateur.")
    .setTitle("Commande : ban")
    .setColor('0E07FA')
    .addField("Utilisation", ">ban @user")
    .addField("Exemple", ">ban ђยภtєг / ן๏г๔คภภє")
    .setFooter("Nova")
    .setTimestamp()
    message.channel.sendEmbed(oembed)
  
   }

if (message.content === prefix + "help clear") {    	
    var oembed = new Discord.RichEmbed()
    .setDescription("**Description :** Permet de purge différent salon, le nombre de messages à supprimer est de 99.")
    .setTitle("Commande : clear")
    .setColor('0E07FA')
    .addField("Utilisation", ">clear [nombre]")
    .addField("Exemple", ">clear 100")
    .setFooter("Nova")
    .setTimestamp()
    message.channel.sendEmbed(oembed)
  
   }

if (message.content === prefix + "help 8ball") {
  var oembed = new Discord.RichEmbed()
  .setDescription("**Description :** Répond à votre question.")
  .setTitle("Commande : 8ball")
  .setColor('0E07FA')
  .addField("Utilisation", ">8ball [Question]")
  .addField("Exemple", ">8ball Hunter est beau ?")
  .setFooter("Nova")
  .setTimestamp()
    message.channel.sendEmbed(oembed)
  }

if (message.content === prefix + "info") {
   var oembed = new Discord.RichEmbed()
   .setDescription("Information du Discord")
   .addField("Nom du discord", message.guild.name)
   .addField("Création du compte", message.guild.createdAt)
   .addField("Date d'arrivée", message.member.joinedAt)
   .addField("Utilisateur sur le serveur", message.guild.memberCount)
   .setFooter("Nova")
   .setTimestamp()
   .setThumbnail(message.author.avatarURL)
   .setColor('RANDOM')
    message.channel.sendEmbed(oembed)
  }
})

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    
if (args[0].toLocaleLowerCase() === prefix +"8ball"){
    if (!args[0]) return message.channel.send("Veuillez poser une question :x:")
        let rep = ["Non ", "Oui", "Je m'en fou !", "Peut être", "Absolument", "Oui, bien sûr",  "Sûrement"];
        let reptaille = Math.floor((Math.random()* rep.length));
        let question = args.slice(0).join(" ");
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("RANDOM")
            .addField("Question :", question)
            .addField("Réponse :", rep[reptaille]);
        message.channel.send(embed)

    }
  });


client.on('message',message =>{

    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)

 

    if (args[0].toLocaleLowerCase() === prefix + 'kick'){

       if (!message.member.hasPermission('KICK_MEMBERS')) returnmessage.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")

       let member = message.mentions.members.first()

       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")

       if (member.highestRole.calculatedPosition >=message.member.highestRole.calculatedPosition && message.author.id !==message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")

       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")

       member.kick()

       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')

    }

});

client.on('message',message =>{

    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)

 

    if (args[0].toLocaleLowerCase() === prefix + 'ban'){

       if (!message.member.hasPermission('BAN_MEMBERS')) returnmessage.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")

       let member = message.mentions.members.first()

       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")

       if (member.highestRole.calculatedPosition >=message.member.highestRole.calculatedPosition && message.author.id !==message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")

       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")

       message.guild.ban(member, {days: 7})

       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')

    }

});


client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }

    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {

            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {

                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {

                    channel.overwritePermissions(role, {

                        SEND_MESSAGES: false

                    })

                })

                member.addRole(role)

                message.channel.send(member + ' a été mute :white_check_mark:')

            })

        }

    }

})
