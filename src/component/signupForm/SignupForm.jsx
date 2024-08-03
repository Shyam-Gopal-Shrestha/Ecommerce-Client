import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { signupFormFields } from "./signupFormField";
import CustomInput from "../customInput/customInput";
import { toast } from "react-toastify";
import useForm from "../../hook/useForm";
// import { createUser } from "../../axios/userAxios";

const formValidation = (formData) => {
  const { password, confirmPassword } = formData;

  return password === confirmPassword;
};

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const { formData, handleOnChange, setFormData } = useForm(initialFormData);
  const { firstName, lastName, email, address, phone, password } = formData;

  // handle on form submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isValidPassword = formValidation(formData);

    if (!isValidPassword) {
      return toast.error("Password and confirm password should match");
    }

    // call api via axios to create user
    const result = await createUser({
      firstName,
      lastName,
      email,
      address,
      phone,
      password,
    });

    if (result?.status === "error") {
      return toast.error(result.message || "Cannot create user!");
    }

    setFormData(initialFormData);
    toast.success(result.message || " Email verification link sent.");
  };

  return (
    <Container className="p-4 border shadow-lg rounded-4">
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <h2 className="text-center mb-4">Create an Account</h2>

        <Row>
          {signupFormFields.map((field, index) => (
            <Col key={index} xs={index === 0 || index === 1 ? 6 : 12}>
              <CustomInput
                label={field.label}
                handleOnChange={handleOnChange}
                inputAttributes={{
                  type: field.type,
                  name: field.name,
                  value: formData[field.name],
                  placeholder: field.placeholder,
                  required: true,
                }}
              />
            </Col>
          ))}
        </Row>

        <Button variant="primary" className="btn-lg w-100" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
