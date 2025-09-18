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

teacherSchema.virtual("courses", {
  // nombre del campo virtual
  ref: "Course", // modelo al que apunta
  localField: "_id", //campo en Teacher
  foreignField: "teacher", //- campo en Course que guarda el id del teacher
});

teacherSchema.set("toJSON", { virtuals: true });
teacherSchema.set("toObject", { virtuals: true });

export const teacherModel = model("Teacher", teacherSchema);
