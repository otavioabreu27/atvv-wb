import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Telefone } from './telefones.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TelefonesService {
  constructor(
    @InjectRepository(Telefone)
    private readonly Telefone: Repository<Telefone>,
    @InjectRepository(Cliente)
    private readonly Cliente: Repository<Cliente>,
  ) {}

  async criaTelefone(telefones: Array<any>) {
    const respArray = {
      created: [],
      notFound: [],
    };
    for (const telefone of telefones) {
      if (await this.Cliente.exist({ where: { id: telefone.cliente } })) {
        const telCriado = await this.Telefone.save(telefone);
        respArray.created.push(telCriado);
      } else {
        respArray.notFound.push(telefone);
      }
    }
    return respArray;
  }
}
