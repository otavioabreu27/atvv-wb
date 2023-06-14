import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicosConsumidos } from './servicosConsumidos.entity';
import { Servico } from '../servicos/servicos.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicosConsumidosService {
  constructor(
    @InjectRepository(ServicosConsumidos)
    private readonly ServicosConsumidos: Repository<ServicosConsumidos>,
    @InjectRepository(Cliente)
    private readonly Cliente: Repository<Cliente>,
    @InjectRepository(Servico)
    private readonly Servico: Repository<Servico>,
  ) {}
  async criaServicosConsumidos(servicosConsumidos: any): Promise<boolean> {
    const existeCliente = await this.Cliente.exist({
      where: {
        id: servicosConsumidos.cliente,
      },
    });
    const existeServico = await this.Servico.exist({
      where: {
        id: servicosConsumidos.servico,
      },
    });

    if (existeCliente && existeServico) {
      await this.ServicosConsumidos.save(servicosConsumidos);
      return true;
    } else {
      return false;
    }
  }
}
