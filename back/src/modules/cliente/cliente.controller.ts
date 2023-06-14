import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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
  createCliente(@Body() cliente: Cliente) {
    try {
      const resp = this.clienteService.criaCliente(cliente);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
