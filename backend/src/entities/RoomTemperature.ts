import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("room_temperature")
export class RoomTemperature {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ type: "datetime" })
  created_at!: Date;

  @Column("float")
  temperature!: number;
}
