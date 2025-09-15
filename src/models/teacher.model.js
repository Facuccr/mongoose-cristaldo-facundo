import { Schema, model } from "mongoose";

const teacherSchema = new Schema(
  {
    name: { type: String, required: true },
    contact: {
      email: String,
      phone: String,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { versionKey: false }
);

export const teacherModel = model("Teacher", teacherSchema);
