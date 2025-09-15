import { studentModel } from "../models/student.model.js";

export const createStudent = async (req, res) => {
  const { name, email, profile, courses } = req.body;

  try {
    const newStudent = await studentModel.create({
      name,
      email,
      profile,
      courses,
    });

    res.status(201).json({
      ok: true,
      msg: "estudiante creado correctamente",
      data: newStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel
      .find({ isDeleted: false })
      .populate("courses", "title description -_id");

    res.status(200).json({ ok: true, data: students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await studentModel.findById(id).populate("courses");

    res.status(200).json({ ok: true, data: student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "estudiante actualizado correctamente",
      data: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await studentModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Estudiante eliminado correctamentre",
      data: deletedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};
