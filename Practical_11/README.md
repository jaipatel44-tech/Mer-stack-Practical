# Practical 11: Ink & Ideas Blog Studio

Original implementation created for Jay. No code or screenshots copied from reference files.

MongoDB required. Copy `.env.example` to `.env` and set JWT_SECRET. Start server (`npm install && npm start`) and client (`npm install && npm run dev`). Open http://localhost:5171. First registered account is admin (demo bootstrapping); later accounts are authors. Authors create/edit/delete their own drafts; admin publishes. Do not deploy the demo bootstrap policy as-is.

For MongoDB projects create a local `.env` based on `.env.example`. Never commit credentials.
