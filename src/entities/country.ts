import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  code?: string;

  @Column()
  name?: string;

  @Column()
  emoji?: string;
}
