import React, { useState } from "react";
import { useParams } from "react-router";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
function EditCompo() {
  const { id } = useParams();
  console.log("useParams : ", id);
  const [input, setInput] = useState({ title: "", desc: "", exp: "" });
  const handleEdit = (e) => {
    console.log("helloweee");
  };
  return (
    <div style={{ width: "1200px", margin: "auto" }}>
      {/* <h1>Edit Component</h1> */}
      <div style={{ width: "650px", margin: "auto" }}>
        <h1>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h1>
        <Form.Label>Title</Form.Label>
        <FormControl
          type="text"
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <Form.Label>Description</Form.Label>
        <FormControl
          as="textarea"
          rows={3}
          onChange={(e) => setInput({ ...input, desc: e.target.value })}
        />
        <Form.Label>Experience</Form.Label>
        <FormControl
          type="text"
          onChange={(e) => setInput({ ...input, exp: e.target.value })}
        />
        <br />
        <Link
          to="/"
          onClick={() => {
            input.title.length > 0 &&
            input.desc.length > 0 &&
            input.exp.length > 0
              ? handleEdit(input)
              : console.log("required");
          }}
          className="btn btn-success"
          style={{
            padding: "5px 30px",
            borderRadius: "0",
            float: "right",
            marginRight: "60px",
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default EditCompo;
