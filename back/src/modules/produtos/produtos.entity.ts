import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProdutosConsumidos } from '../produtosConsumidos/produtosConsumidos.entity';

@Entity({ name: 'produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  valor: number;

  @Column({ length: 1 })
  genero: string;

  @OneToMany(
    () => ProdutosConsumidos,
    (produtosConsumidos) => produtosConsumidos.produto,
  )
  produtosConsumidos: ProdutosConsumidos[];
}
