import { User } from './../auth/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number
    @Column({unique:true})
    numero: number
    @Column()
    descricao: string
    @Column({type:"json"})
    projeto: object
    @Column()
    preco: number
    @Column()
    estado: number
    /*
        0-Enviado para fabrica
        1-Em analise
        2-Analisado
        3-Em producao
        4-Pronto para enviar
        5-Na escala de entrega
        6-Enviado
        9-ERRO
    */
    @ManyToOne(() => User, user => user.pedidos, {eager: true})
    user: User
    @ManyToOne(() => User, user => user.pedidos, {eager: true})
    analizador: User
    @Column({nullable:true})
    dti_analise: Date
    @Column({nullable:true})
    dtf_analise: Date
    @ManyToOne(() => User, user => user.pedidos, {eager: true})
    producao: User
    @Column({nullable:true})
    dti_producao: Date
    @Column({nullable:true})
    dtf_producao: Date
    @ManyToOne(() => User, user => user.pedidos, {eager: true})
    escala: User
    @Column({nullable:true})
    dti_escala: Date
    @Column({nullable:true})
    dtf_escala: Date
}