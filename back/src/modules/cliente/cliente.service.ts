import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly Cliente: Repository<Cliente>,
  ) {}

  async listaTodos(): Promise<Cliente[]> {
    return await this.Cliente.find();
  }

  async listaId(id: string): Promise<Cliente> {
    return await this.Cliente.findOne({
      where: {
        id: parseInt(id),
      },
    });
  }

  async criaCliente(cliente: Cliente): Promise<Cliente> {
    return this.Cliente.save(cliente);
  }

  async deletaCliente(id: string): Promise<boolean> {
    const resp = await this.Cliente.delete(parseInt(id));
    return resp.affected ? true : false;
  }

  async alteraCliente(id: string, cliente: Cliente): Promise<Cliente> {
    await this.Cliente.update(parseInt(id), cliente);
    const clienteAlterado = await this.Cliente.findOne({
      where: { id: parseInt(id) },
    });
    return clienteAlterado;
  }
}
