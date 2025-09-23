// backend/server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tattu',
  password: '123',
  port: 5432,
});


// async function criarSenha() { 
//   const senha = '123456';
//   const hash = await bcrypt.hash(senha, 10);

//   console.log('Hash gerado:', hash);
  
// }

// criarSenha();


app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const usuario = result.rows[0];

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    res.json({ message: 'Login bem-sucedido', usuario });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
