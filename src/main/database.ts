// src/main/database.ts
import Database from 'better-sqlite3';
import { app } from 'electron';
import path from 'path';

// Define onde o arquivo do banco vai ficar salvo no PC do usuário
const dbPath = path.join(app.getPath('userData'), 'database.db');
const db = new Database(dbPath);

export function initDatabase() {
    // Comando SQL para criar a tabela de usuários
    const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL,
      nome_exibicao TEXT
    );
  `;

    db.exec(query);
    console.log("Banco de dados inicializado em:", dbPath);

    // Vamos inserir um usuário padrão para você conseguir testar o login
    const checkUser = db.prepare('SELECT * FROM usuarios WHERE username = ?').get('admin');
    if (!checkUser) {
        const insert = db.prepare('INSERT INTO usuarios (username, senha, nome_exibicao) VALUES (?, ?, ?)');
        insert.run('admin', '123', 'Administrador');
    }
}

export default db;