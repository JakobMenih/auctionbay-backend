import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Auction } from './auction.entity';
import { Bid } from './bid.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  @Exclude()
  password: string;

  @OneToMany(() => Auction, (auction) => auction.user)
  auctions: Auction[];

  @OneToMany(() => Bid, (bid) => bid.user)
  bids: Bid[];
}
