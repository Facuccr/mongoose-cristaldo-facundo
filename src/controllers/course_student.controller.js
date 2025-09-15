import { studentModel } from "../models/student.model.js";

//endpoint que permit agregar un nuevo vinculo en una relacion nmuchos a mucho
export const addCourseToStudent = async (req, res) => {
  const { id } = req.params; // id del estudiante
  const { courseId } = req.body;

  try {
    const student = await studentModel.findById(id);

    if (!student) {
      return res
        .status(404)
        .json({ ok: false, msg: "estudiante no encontrado" });
    }

    const existingRelation = student.courses.includes(courseId);

    if (existingRelation) {
      return res
        .status(400)
        .json({ ok: false, msg: "el curso ya esta vinculado al estudiante" });
    }

    student.courses.push(courseId);
    await student.save();

    res.status(200).json({
      ok: true,
      msg: "curso agregado al estudiante",
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};
