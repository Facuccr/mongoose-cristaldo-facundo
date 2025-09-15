import { Schema, model, Types } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile: {
      age: Number,
      address: String,
    },
    courses: [{ type: Types.ObjectId, ref: "Course" }],
    isDeleted: { type: Boolean, default: false },
  },
  { versionKey: false }
);

export const studentModel = model("Student", studentSchema);
