import { Schema, model, Types } from "mongoose";

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    teacher: { type: Types.ObjectId, ref: "Teacher", required: true },
    students: [{ type: Types.ObjectId, ref: "Student" }],
    isDeleted: { type: Boolean, default: false },
  },
  { versionKey: false }
);

export const courseModel = model("Course", courseSchema);
