import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./Forms.css";


const Forms = () => {
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (data) => {
            console.log(data);
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please enter a valid email")
                .required("Email is required"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters"),
        }),
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="bi bi-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className={`form-control ${
                                                touched.email && errors.email ? "is-invalid" : ""
                                            }`}
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {touched.email && errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className={`form-control ${
                                                touched.password && errors.password ? "is-invalid" : ""
                                            }`}
                                            id="password"
                                            name="password"
                                            placeholder="Enter password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {touched.password && errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        Sign In
                                    </button>
                                </div>

                                <div className="text-center mt-3">
                                    <a href="#forgot-password" className="text-decoration-none">
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="text-center mt-4">
                                    <span className="text-muted">Don't have an account? </span>
                                    <a href="#signup" className="text-decoration-none">
                                        Sign up
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;