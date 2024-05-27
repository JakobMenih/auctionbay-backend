import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Auction } from './auction.entity';

@Entity()
export class Bid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.bids)
  user: User;

  @ManyToOne(() => Auction, (auction) => auction.bids)
  auction: Auction;
}
