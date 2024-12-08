import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  ObjectId,
  BeforeInsert,
} from "typeorm";

@Entity("room_temperature")
export class RoomTemperature {
  @ObjectIdColumn()
  id!: ObjectId;

  @CreateDateColumn({ type: "datetime" })
  created_at!: Date;

  @Column("float")
  temperature!: number;

  @BeforeInsert()
  ensureISOFormat() {
    if (!this.created_at) {
      this.created_at = new Date();
    }
    this.created_at = new Date(this.created_at.toISOString());
  }
}
