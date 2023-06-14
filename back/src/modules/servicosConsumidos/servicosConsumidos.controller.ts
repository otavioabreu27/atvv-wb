import { Body, Controller, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { ServicosConsumidosService } from './servicosConsumidos.service';
import { ServicosConsumidos } from './servicosConsumidos.entity';

@Controller('venda/servico')
export class ServicosConsumidosController {
  constructor(
    private readonly servicosConsumidosService: ServicosConsumidosService,
  ) {}

  @Post()
  async criaServicosConsumidos(
    @Body() servicosConsumidos: ServicosConsumidos,
    @Res() res: Response,
  ): Promise<any> {
    return (await this.servicosConsumidosService.criaServicosConsumidos(
      servicosConsumidos,
    ))
      ? res.status(201).send('OK')
      : res.status(404).send('Not Found');
  }
}
