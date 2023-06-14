import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoController } from './servicos.controller';
import { ServicoService } from './servicos.service';
import { Servico } from './servicos.entity';

@Module({
  controllers: [ServicoController],
  providers: [ServicoService],
  imports: [TypeOrmModule.forFeature([Servico])],
})
export class ServicoModule {}
