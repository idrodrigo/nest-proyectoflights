import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20 })
  origin: string;

  @Column('varchar', { length: 20 })
  destination: string;

  @Column('int')
  fnumber: number;

  @Column('time with time zone')
  depart: Date;

  @Column('time with time zone')
  arrive: Date;

  @Column('boolean')
  nonstop: boolean;
}
