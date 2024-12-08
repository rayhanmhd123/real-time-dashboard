import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  ObjectId,
} from "typeorm";

@Entity("room_temperature")
export class RoomTemperature {
  @ObjectIdColumn()
  id!: ObjectId;

  @CreateDateColumn({ type: "datetime" })
  created_at!: Date;

  @Column("float")
  temperature!: number;
}
