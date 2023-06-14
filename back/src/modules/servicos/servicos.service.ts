import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from './servicos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private readonly Servico: Repository<Servico>,
  ) {}

  async listaTodos(): Promise<Servico[]> {
    return await this.Servico.find();
  }

  async listaId(id: string): Promise<Servico> {
    return await this.Servico.findOne({
      where: {
        id: parseInt(id),
      },
    });
  }

  async criaServico(servico: Servico): Promise<Servico> {
    return this.Servico.save(servico);
  }

  async deletaServico(id: string): Promise<boolean> {
    const resp = await this.Servico.delete(parseInt(id));
    return resp.affected ? true : false;
  }

  async alteraServico(id: string, servico: Servico): Promise<Servico> {
    await this.Servico.update(parseInt(id), servico);
    const servicoAlterado = await this.Servico.findOne({
      where: { id: parseInt(id) },
    });
    return servicoAlterado;
  }
}
