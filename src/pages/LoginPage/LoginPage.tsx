import { Formik } from "formik";
import { Button, Card, Form, Row } from "react-bootstrap";
import "./LoginPage.scss";
import useLoginForm from "./hooks/useLoginForm";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const { validate, logIn } = useLoginForm();

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <Formik
        initialValues={initialValues}
        onSubmit={logIn}
        validate={validate}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
        }) => (
          <Card className="w-25">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <h1 className="h2">Login</h1>
                <hr />
                <Row>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="email@domain.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Row>
                <Row className="error-container">
                  {errors.email && touched.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="********"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Row>
                <Row className="error-container">
                  {errors.password && touched.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </Row>
                <div className="d-flex justify-content-end">
                  <Button className="d-blick" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Formik>
    </div>
  );
}
