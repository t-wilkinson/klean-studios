'use strict';
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'winston.trey.wilkinson@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendMail(data) {
  let info = await transporter.sendMail(data);

  console.log("Message sent: %s", info.messageId);
}

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

function toCamelCase(str) {
  str = toTitleCase(str).replace(/ /g, '')
  return str.charAt(0).toLowerCase() + str.slice(1)
}

function modifyKeys(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => {
      return [fn(k), v]
  }))
}

module.exports = {
  submit: async (ctx, next) => {
    let body = ctx.request.body

    let data = modifyKeys(body, (k) => toCamelCase(k.replace(/-/g, ' ')))
    // FormData stores checked items as 'on'
    for (const key of ['recording', 'mixing', 'mastering']) {
      if (data[key] === 'on') {
        data[key] = true
      } else {
        data[key] = false
      }
    }

    try {
      await strapi.entityService.create('api::service.service', {
        data,
      })
    } catch (err) {
      console.error(err)
      console.error(err.message)
      console.error(err.details)
    }

    try {
      if (process.env.NODE_ENV !== 'development') {
        await sendMail({
          from: '"Klean Studios Server" <winston.trey.wilkinson@gmail.com>', // sender address
          to:
          process.env.NODE_ENV === 'development'
          ? "winston.trey.wilkinson@gmail.com" // list of receivers
          : "maxwellklim03@gmail.com, winston.trey.wilkinson@gmail.com", // list of receivers
          subject: "Service submission", // Subject line
          text: JSON.stringify(modifyKeys(body, (k) => toTitleCase(k.replace(/-/g, ' '))), null, 4), // plain text body
        })
      }

      ctx.body = 'ok';
      ctx.status = 200
    } catch (err) {
      console.error(err)
      console.error(err.message)
      console.error(err.details)
      ctx.body = err;
      ctx.status = 400
    }
  }
};
