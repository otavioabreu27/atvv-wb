import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
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
  async deletaCliente(@Param('id') id: string): Promise<string> {
    try {
      const resp = await this.clienteService.deletaCliente(id);
      if (resp.affected != 0) {
        return 'Deletado';
      } else {
        return 'Nenhuma linha afetada';
      }
    } catch (e) {
      return e;
    }
  }
}
