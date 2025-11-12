
# Twilio Voice Web Client Demo

This is an app that lets you make and receive calls on your Twilio number from your browser.

## 1. Prerequisites

- Node.js installed
- A Twilio account with:
  - A verified phone number
  - A Twilio **Voice** phone number
  - A **TwiML App** whose Voice URL returns:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Dial>
        <Client>andi</Client>
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

## 3. Install dependencies

```bash
npm install
```

## 4. Run

```bash
npm start
```

Then open:

http://localhost:3000/

Keep your browser tab open to receive calls.
