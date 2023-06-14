import { Module } from '@nestjs/common';
import { ServicosConsumidosController } from './servicosConsumidos.controller';
import { ServicosConsumidosService } from './servicosConsumidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicosConsumidos } from './servicosConsumidos.entity';
import { Servico } from '../servicos/servicos.entity';
import { Cliente } from '../cliente/cliente.entity';

@Module({
  controllers: [ServicosConsumidosController],
  providers: [ServicosConsumidosService],
  imports: [TypeOrmModule.forFeature([ServicosConsumidos, Servico, Cliente])],
})
export class ServicosConsumidosModule {}
