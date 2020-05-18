const accountSid = 'ACc97c17a2005bfe1cfb536bb98865351d';
const authToken = '13ddecb7fd17fc9959d4041eb2afea8f';
const client = require('twilio')(accountSid, authToken);

const send_message = (req, res) => {
  client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Te amo :3',
         to: 'whatsapp:+51932988661'
       })
      .then(message => res.json(message.sid));
}

const sms = (req, res) => {
  console.log(res.body);
  res.send(res.body);
}

module.exports = {
  send_message,
  sms
}