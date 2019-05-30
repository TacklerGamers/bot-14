const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });

  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

client.on('message', msg => {
  if (msg.content === 'dm') {
    dm = msg.member.send("Here is your nitro  https://discord.gift/d9hMZnbxB6dwjxaN");
  }
});



client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply("You want to play huh!");
      msg.channel.send("PONG!!");
    }
  });

  client.on('message', msg => {
    if (msg.content === 'who is your owner ??') {
      msg.reply("huh!");
      msg.channel.send("Tackler is my owner");
    }
  });

  client.on('message', msg => {
    if (msg.content === 'Dogo') {
      msg.channel.send("Dogo big dev is here everyone");
    }
  });

  client.on('message', msg => {
    if (msg.content === '༒₭ααŁ༒') {
      msg.channel.send("Don't take anything serious I was joking");
      msg.reply("ok")
    }
  });


client.login('token');