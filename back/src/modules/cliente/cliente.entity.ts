import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { ProdutosConsumidos } from '../produtosConsumidos/produtosConsumidos.entity';
import { ServicosConsumidos } from '../servicosConsumidos/servicosConsumidos.entity';
import { Cpf } from '../cpf/cpf.entity';
import { Rg } from '../rg/rg.entity';
import { Telefone } from '../telefones/telefones.entity';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50 })
  nomeSocial: string;

  @Column({ length: 1 })
  genero: string;

  @Column()
  dataCadastro: Date;

  @OneToMany(
    () => ProdutosConsumidos,
    (produtosConsumidos) => produtosConsumidos.cliente,
  )
  produtosConsumidos: ProdutosConsumidos[];

  @OneToMany(
    () => ServicosConsumidos,
    (servicosConsumidos) => servicosConsumidos.cliente,
  )
  servicosConsumidos: ServicosConsumidos[];

  @OneToMany(() => Telefone, (telefone) => telefone.cliente)
  telefones: Telefone[];

  @OneToMany(() => Rg, (rg) => rg.cliente)
  rg: Rg[];

  @OneToOne(() => Cpf, (cpf) => cpf.cliente)
  cpf: Cpf;
}
