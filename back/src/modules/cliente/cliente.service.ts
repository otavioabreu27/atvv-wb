import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { DeleteResult, Repository } from 'typeorm';

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

  async deletaCliente(id: string): Promise<DeleteResult> {
    return this.Cliente.delete(parseInt(id));
  }
}
