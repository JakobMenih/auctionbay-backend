import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Auction } from './auction.entity';
import { Bid } from './bid.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Auction, (auction) => auction.user)
  auctions: Auction[];

  @OneToMany(() => Bid, (bid) => bid.user)
  bids: Bid[];
}
