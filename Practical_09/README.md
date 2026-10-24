# Practical 9: Campus File Vault (Multer + MongoDB)

Original implementation created for Jay. No code or screenshots copied from reference files.

Start MongoDB; `cd server && npm install && npm start`. Postman: POST http://localhost:5109/api/files → Body → form-data → key `file` (File type). GET /api/files shows MongoDB metadata.

For MongoDB projects create a local `.env` based on `.env.example`. Never commit credentials.
