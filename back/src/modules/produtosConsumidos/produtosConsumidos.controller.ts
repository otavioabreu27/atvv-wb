import { Controller, Body, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProdutosConsumidosService } from './produtosConsumidos.service';
import { ProdutosConsumidos } from './produtosConsumidos.entity';

@Controller('venda/produto')
export class ProdutosConsumidosController {
  constructor(
    private readonly produtosConsumidosService: ProdutosConsumidosService,
  ) {}

  @Post()
  async criaProdutosConsumidos(
    @Body() produtosConsumidos: ProdutosConsumidos,
    @Res() res: Response,
  ): Promise<any> {
    return (await this.produtosConsumidosService.criaProdutosConsumidos(
      produtosConsumidos,
    ))
      ? res.status(201).send('OK')
      : res.status(404).send('Not Found');
  }
}
