
import { Controller, Post, Body, Res, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() body: any, @Res() res): Promise<any> {
    try {
      const usuario = await this.authService.validateUser(body.email, body.senha);
      res.status(HttpStatus.OK).json({ message: 'Login bem-sucedido', usuario });
    } catch (err) {
      
      if (err instanceof UnauthorizedException) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: err.message });
      } else {
        console.error(err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor' });
      }
    }
  }
}