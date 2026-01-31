import { initDatabase } from './database';

// Dentro da função onde o app fica pronto (app.whenReady)
app.whenReady().then(() => {
    initDatabase(); // <--- Adicione isso aqui
    // ... resto do código de criar janela
});

import { ipcMain } from 'electron';
import db from './database';

ipcMain.handle('tentar-login', async (event, { usuario, senha }) => {
    const stmt = db.prepare('SELECT * FROM usuarios WHERE username = ? AND senha = ?');
    const user = stmt.get(usuario, senha);

    if (user) {
        return { sucess: true, user }; // Retorna os dados se achar
    } else {
        return { sucess: false, message: "Usuário ou senha inválidos" };
    }
});