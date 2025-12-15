
# Twilio Voice Web Client Demo

This is an app that lets you make and receive calls on your Twilio number from your browser.

## 1. Prerequisites

- Node.js installed ( https://nodejs.org )
- A Twilio account with:
  - A verified phone number
  - A Twilio **Voice** phone number
  - A **TwiML App** whose Voice URL returns:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Dial>
        <Client>user</Client>
      </Dial>
    </Response>
    ```

- API Key & Secret created in Twilio Console.

## 2. Configure

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and fill in:

   - `TWILIO_ACCOUNT_SID` – from Twilio Console
   - `TWILIO_API_KEY` / `TWILIO_API_SECRET` – from API Keys
   - `TWIML_APP_SID` – SID of your TwiML App (starts with AP...)

## 3. Install dependencies and start your backend server

```bash
npm install
```

```bash
node server.js
```

## 4. Install Ngrok

```bash
npm install -g ngrok
ngrok config add-authtoken YOUR_AUTHTOKEN
ngrok http 3000

```

https://dashboard.ngrok.com

## 5. Start your App!

ngrok http 3000

http://localhost:3000/


Keep your browser tab open to receive calls.
