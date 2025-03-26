import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      contact: e.target.contact.value
    }
    if (!data.name || !data.email || !data.gender || !data.contact) {
      return alert("All Filed required")

    }
    setUser([...user, data])
    e.target.reset()


  }

  function removeHandler(delIndex) {
    const newData = user.filter(
      (d, i) => {
        return i !== delIndex ? true : false
      }
    )
    setUser(newData)
  }

  return (
    <div className="container-xl mt-5">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-4">
          <div className="card shadow-lg p-4">
            <h4 className="text-center mb-4">User Registration</h4>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select className="form-select" name="gender" >
                  <option value="" disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" name="contact" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>

        {/* Table Section */}
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h4 className="text-center mb-4">User Data</h4>
            <table className="table table-bordered table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                        <td>{data.contact}</td>
                        <td onClick={() => removeHandler(index)}>Delete</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
