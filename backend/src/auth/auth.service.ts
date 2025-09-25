
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'tattu',
      password: '123',
      port: 5432,
    });
  }

  async validateUser(email: string, senha: string): Promise<any> {
    const result = await this.pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const usuario = result.rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      throw new UnauthorizedException('Senha inválida');
    }

    return usuario;
  }
}