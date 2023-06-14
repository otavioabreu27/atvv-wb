import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ServicosConsumidos } from '../servicosConsumidos/servicosConsumidos.entity';

@Entity({ name: 'servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  valor: number;

  @Column({ length: 1 })
  genero: string;

  @OneToMany(
    () => ServicosConsumidos,
    (servicosConsumidos) => servicosConsumidos.servico,
  )
  servicosConsumidos: ServicosConsumidos[];
}
