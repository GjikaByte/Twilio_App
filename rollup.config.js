import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'node_modules/@twilio/voice-sdk/dist/twilio.min.js',
  output: {
    file: 'public/js/twilio-voice.min.js',
    format: 'umd',
    name: 'TwilioVoice', // 👈 attaches window.TwilioVoice
  },
  plugins: [resolve(), commonjs()],
};
