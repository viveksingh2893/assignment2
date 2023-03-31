import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/form.css";
import ipaddress from "../components/url";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadCrumb from "../components/breadcrumb";

const Form = (props) => {
  const initialValues = {
    name: "",
    email: "",
    dob: "",
    country: "",
    avatar: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [submit, setSubmit] = useState(false);
  let navigate = useNavigate();

  const Success = useCallback(() => {
    return toast.success("Submitted Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);

  const Failed = useCallback(() => {
    return toast.error("Failed! try again", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);

  const sendData = async () => {
    await axios
      .post(`${ipaddress}`, {
        name: formValues.name,
        email: formValues.email,
        dob: formValues.dob,
        country: formValues.country,
        avatar: formValues.avatar,
      })
      .then((res) => {
        console.log(res);
        Success();
      })
      .catch((err) => {
        console.log(err);
        Failed();
      });
  };

  const updateData = async () => {
    await axios
      .put(`${ipaddress}/${props.select}`, {
        name: formValues.name,
        email: formValues.email,
        dob: formValues.dob,
        country: formValues.country,
        avatar: formValues.avatar,
      })
      .then((res) => {
        console.log(res);
        Success();
      })
      .catch((err) => {
        console.log(err);
        Failed();
      });
  };

  const getData = async () => {
    await axios
      .get(`${ipaddress}/${props.select}`, {})
      .then((res) => {
        setFormValues(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    props.select ? getData() : console.log("no id");
  }, [props.select]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit === true) {
      props.select ? updateData() : sendData();
      props.setSelect(null);
      setFormValues({
        name: "",
        email: "",
        dob: "",
        country: "",
        avatar: "",
      });
      navigate("../");
      setSubmit(false);
    }
  }, [submit]);

  return (
    <>
      <div className="breadcrumb">
        <BreadCrumb />
      </div>
      <div className="form-container">
        <form className="form-subcontainer" onSubmit={handleSubmit}>
          <div className="form_header">
            <p style={{ margin: "0" }}>Form</p>
          </div>
          <div className="form-input-container">
            <label className="label_field ">Name :</label>
            <input
              type="text"
              className="input_field"
              required="required"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <label className="label_field ">Email :</label>
            <input
              type="email"
              className="input_field"
              required="required"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <label className="label_field ">DOB :</label>
            <input
              type="date"
              className="input_field"
              required="required"
              value={formValues.dob}
              onChange={(e) =>
                setFormValues({ ...formValues, ["dob"]: e.target.value })
              }
            />
            <label className="label_field ">Country :</label>
            <input
              type="text"
              className="input_field"
              required="required"
              name="country"
              value={formValues.country}
              onChange={handleChange}
            />
            <label className="label_field ">Avatar url :</label>
            <input
              type="url"
              className="input_field"
              required="required"
              name="avatar"
              value={formValues.avatar}
              onChange={handleChange}
            />
            {/* <label className="label_field ">Upload photo:</label>
          <input
            type="file"
            name="avatar"
            required="required"
            className="upload-box"
            onChange={(e) =>
              setFormValues({ ...formValues, ["avatar"]: e.target.files[0] })
            }
          /> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1vw",
              }}
            >
              {props.select ? (
                <button
                  type="submit"
                  value="Submit"
                  className="form-submit-btn"
                >
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  value="Submit"
                  className="form-submit-btn"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default Form;
