import { createApp } from "./app.js";
const port = Number(process.env.PORT ?? 3103);
createApp().listen(port, () => process.stdout.write(`DreamAtlas listening on http://localhost:${port}\n`));

