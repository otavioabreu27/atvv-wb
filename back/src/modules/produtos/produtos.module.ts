import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './produtos.controller';
import { ProdutoService } from './produtos.service';
import { Produto } from './produtos.entity';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
  imports: [TypeOrmModule.forFeature([Produto])],
})
export class ProdutoModule {}
