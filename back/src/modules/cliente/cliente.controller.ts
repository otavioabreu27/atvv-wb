import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Res,
  Put,
} from '@nestjs/common';
import { Response } from 'express';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async listaTodos(): Promise<any> {
    const resp = await this.clienteService.listaTodos();
    return resp;
  }

  @Get(':id')
  async listaId(@Param('id') id: string): Promise<Cliente> {
    try {
      const resp = await this.clienteService.listaId(id);
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Post()
  criaCliente(@Body() cliente: Cliente) {
    try {
      const resp = this.clienteService.criaCliente(cliente);
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Delete(':id')
  async deletaCliente(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const resp = await this.clienteService.deletaCliente(id);
      resp ? res.status(200).send('OK') : res.status(404).send('Not found');
    } catch (e) {
      res.send(400).send(`Error: ${e}`);
    }
  }

  @Put(':id')
  async alteraCliente(
    @Param('id') id: string,
    @Body() cliente: Cliente,
  ): Promise<Cliente> {
    try {
      const resp = await this.clienteService.alteraCliente(id, cliente);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
