import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity} from 'typeorm';
import CustomerVersion from './CustomerVersion';

@Entity({
    name: 'customerPortal_customer'
})
export default class Customer extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'next_version_num'
    })
    nextVersionNum: number;

    @OneToOne(() => CustomerVersion)
    @JoinColumn({
        name: 'current_version_id'
    })
    currentVersion: CustomerVersion

    @Column({
        name: 'is_deleted'
    })
    isDeleted: boolean;

    @Column({
        name: 'created_at'
    })
    createdAt: Date

    @Column({
        name: 'updated_at'
    })
    updatedAt: Date

}
