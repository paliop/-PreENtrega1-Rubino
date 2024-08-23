import {object, string, ref } from "yup";

let userSchema = object({
  nombre: string().required("el campo nombre es requerido"),
  telefono: string().required("el campo telefono es requerido"),
  email: string()
  .email("el campo email no tiene formato correcto")
  .required("ingresar email"),
  confirmarCorreo: string()
  .oneOf([ref("email"), null], "Los correos deben coincidir")
  .required("Confirmar Correo")
});

const ValidateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "succes" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default ValidateForm;
