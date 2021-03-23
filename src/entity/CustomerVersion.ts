import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity} from 'typeorm';
import Customer from './Customer';

@Entity({
  name: 'customerPortal_customerversion'
})
export default class CustomerVersion extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Customer)
    @JoinColumn({
      name: 'customer_id'
    })
    customer: Customer;
}
