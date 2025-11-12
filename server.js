require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// === Generate Access Token for the browser ===
app.get('/token', (req, res) => {
  const {
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET,
    TWIML_APP_SID,
  } = process.env;

  const AccessToken = twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  const identity = 'andi';

 
  const token = new AccessToken(TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET, {
    identity,
  });

  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: TWIML_APP_SID,
    incomingAllow: true, // Allow incoming calls to the web client
  });

  token.addGrant(voiceGrant);
  res.json({ token: token.toJwt() });
});

// === TwiML handler for outgoing/incoming calls ===
app.post('/voice', (req, res) => {
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();

  const to = req.body.To;
  const callerId = process.env.TWILIO_PHONE_NUMBER; 
  if (to) {
    console.log(`📞 Outgoing call to ${to}`);
    const dial = twiml.dial({ callerId });
    dial.number(to); // Call destination phone number
  } else {
    console.log('💻 Incoming call to web client "andi"');
    const dial = twiml.dial();
    dial.client('andi'); // Allow incoming calls to the web client
  }

  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
