import { Module } from '@nestjs/common';
import { ProdutosConsumidosController } from './produtosConsumidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosConsumidos } from './produtosConsumidos.entity';
import { ProdutosConsumidosService } from './produtosConsumidos.service';
import { Produto } from '../produtos/produtos.entity';
import { Cliente } from '../cliente/cliente.entity';

@Module({
  controllers: [ProdutosConsumidosController],
  providers: [ProdutosConsumidosService],
  imports: [TypeOrmModule.forFeature([ProdutosConsumidos, Produto, Cliente])],
})
export class ProdutosConsumidosModule {}
