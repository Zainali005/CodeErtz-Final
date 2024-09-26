import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Breadcrumb from "../components/common/Breadcrumb";
import JoinOurTeam from "../components/common/JoinOurTeam";
import Layout from "../components/layout/index";

function JobDetails() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      console.log("Selected file:", files[0]);
      setResume(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const { phone, email, coverLetter } = formData;

    // Validate phone number (only digits)
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must contain only digits.");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    // Validate cover letter length (max 500 characters)
    if (coverLetter.length > 500) {
      toast.error("Cover letter must not exceed 500 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) return;

    const data = new FormData();
  
    // Append form fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
  
    // Append resume file
    if (resume) {
      data.append("resume", resume); // Append the resume file
    } else {
      console.error("No resume selected.");
      return; // Prevent submission if no resume
    }
  
    // Debug FormData
    for (let [key, value] of data.entries()) {
      if (key === "resume") {
        console.log("Resume file:", value);
      } else {
        console.log(`${key}: ${value}`);
      }
    }
  
    setLoading(true);
  
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: data,
      });
  
      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          position: "",
          experience: "",
          coverLetter: "",
        });
        setResume(null);
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        toast.error(
          errorData.error || "Error submitting application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Breadcrumb pageTitle="Career" pageName="Career" id="#job-details" />
      <div className="job-details-section pt-120 pb-120" id="job-details">
        <div className="container">
          <div className="row d-flex justify-content-center gy-5">
            <div className="col-lg-12">
              <div className="job-details-wrap">
                <p>
                  Currently, there are no job openings available. However, if
                  you believe you possess the skills and expertise that align
                  with our team, we encourage you to share your resume. We will
                  review your qualifications and get in touch with you when a
                  suitable position becomes available.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="apply-form">
                <div className="apply-form-title">
                  <h4>Apply for a Position:</h4>
                  <p>Please complete the form below to share your details:</p>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name:"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number:"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email:"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="position"
                          placeholder="Position Applied For:"
                          value={formData.position}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="experience"
                          placeholder="Experience:"
                          value={formData.experience}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <textarea
                          name="coverLetter"
                          cols={30}
                          rows={6}
                          placeholder="Cover Letter:"
                          value={formData.coverLetter}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.xlsx,.xls" 
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <input
                        type="submit"
                        value={loading ? "Sending..." : "Send Now"}
                        className={`eg-btn btn--submit ${
                          loading ? "loading" : ""
                        }`}
                        disabled={loading}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
      <JoinOurTeam btnclass="btn--primary" />
    </Layout>
  );
}

export default JobDetails;
