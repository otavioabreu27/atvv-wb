import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cpf } from './cpf.entity';
import { Repository } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Injectable()
export class CpfService {
  constructor(
    @InjectRepository(Cpf)
    private readonly Cpf: Repository<Cpf>,
    @InjectRepository(Cliente)
    private readonly Cliente: Repository<Cliente>,
  ) {}

  async listaCpf(id: string) {
    return await this.Cpf.createQueryBuilder('cpf')
      .where('cpf.clienteId = :clienteId', { clienteId: parseInt(id) })
      .getMany();
  }

  async criaCpf(cpf: any): Promise<any> {
    if (await this.Cliente.exist({ where: { id: cpf.cliente } })) {
      const resp = await this.Cpf.save(cpf);
      return resp;
    } else {
      return false;
    }
  }
}
