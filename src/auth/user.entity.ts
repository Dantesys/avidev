import { Pedido } from 'src/pedidos/pedidos.model';
import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nome: string
    @Column()
    senha: string
    @Column({unique: true})
    email: string
    @Column()
    tp: number
    /*
    0-Revendedora
    1-Funcionario
    2-Gerente
    */
    @Column({type:"json"})
    endereco: object
    @OneToMany(type => Pedido, pedido => {pedido.user})
    pedidos: Pedido[]
}