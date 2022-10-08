import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const [record, setrecord] = useState({
    fullname: "",
    email: "",
    address: "",
    contact: "",
  });

  const navigate = useNavigate();

  const GetRecord = async () => {
    await axios
      .get(`${process.env.REACT_SERVER_SIDE_URL}/user/fetchData/${id}`)
      .then((res) => {
        setrecord({ ...res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;

    setrecord((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const SubmitRecord = (e) => {
    e.preventDefault();
    const { fullname, email, address, contact } = record;

    // updating the record in database
    axios
      .put(`${process.env.REACT_SERVER_SIDE_URL}/user/update/${id}`, {
        fullname,
        email,
        address,
        contact,
      })
      .then((res) => {
        console.log("its working properly");
        console.log(res);
      })
      .catch((err) => console.log(err));

    toast.success("Record Updated Successfully");
    navigate("/");
  };

  useEffect(() => {
    GetRecord();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 className="text-lg font-bold">Register</h1>
          <form onSubmit={SubmitRecord} className="flex flex-col mt-4">
            <input
              type="text"
              required
              value={record.fullname}
              onChange={handlechange}
              name="fullname"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Full Name"
            />
            <input
              type="email"
              required
              value={record.email}
              onChange={handlechange}
              name="email"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Email address"
            />
            <input
              type="text"
              required
              value={record.address}
              onChange={handlechange}
              name="address"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Complete Address"
            />
            <input
              type="text"
              required
              value={record.contact}
              onChange={handlechange}
              name="contact"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Contact Number"
            />
            <button
              type="submit"
              required
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Submit
            </button>
            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Back to Home Page?
                <Link to="/" className="ml-1 font-medium text-blue-400">
                  Back
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
