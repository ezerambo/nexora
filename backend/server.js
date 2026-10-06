const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Servidor NEXORA funcionando correctamente",
  });
});

// Ruta de prueba de PostgreSQL
app.get("/api/health", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        NOW() AS fecha,
        current_database() AS base
    `);

    res.json({
      success: true,
      message: "NEXORA conectado a PostgreSQL correctamente",
      database: result.rows[0].base,
      serverTime: result.rows[0].fecha,
    });
  } catch (error) {
    console.error("Error de conexión con PostgreSQL:", error);

    res.status(500).json({
      success: false,
      message: "No se pudo conectar con PostgreSQL",
    });
  }
});

// Ruta para errores 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
    path: req.originalUrl,
  });
});

// Sistema global de errores
app.use((err, req, res, next) => {
  console.error("Error interno de NEXORA:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Error interno del servidor"
        : err.message || "Ocurrió un error",
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor NEXORA funcionando en http://localhost:${PORT}`);
});