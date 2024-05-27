import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Bid } from './bid.entity';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startingPrice: number;

  @Column()
  endTime: Date;

  @ManyToOne(() => User, (user) => user.auctions)
  user: User;

  @OneToMany(() => Bid, (bid) => bid.auction)
  bids: Bid[];
}
