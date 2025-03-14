import app from "./src/index.js";


const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

