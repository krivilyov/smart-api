import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  GHOST = 'ghost',
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  confirmHash: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: [UserRole.GHOST],
  })
  role: UserRole;

  @Column({ nullable: true })
  restoreHash: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ nullable: true })
  avatar: string;
}
