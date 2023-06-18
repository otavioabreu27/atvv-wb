import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rg } from './rg.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RgService {
  constructor(
    @InjectRepository(Rg)
    private readonly Rg: Repository<Rg>,
    @InjectRepository(Cliente)
    private readonly Cliente: Repository<Cliente>,
  ) {}

  async listaRg(id: string) {
    const respArray = await this.Rg.createQueryBuilder('rg')
      .where('rg.clienteId = :clienteId', { clienteId: parseInt(id) })
      .getMany();
    return respArray;
  }

  async criaRg(rgs: Array<any>) {
    const respArray = {
      created: [],
      notFound: [],
    };
    for (const rg of rgs) {
      if (await this.Cliente.exist({ where: { id: rg.cliente } })) {
        const rgCriado = await this.Rg.save(rg);
        respArray.created.push(rgCriado);
      } else {
        respArray.notFound.push(rg);
      }
    }
    return respArray;
  }
}
