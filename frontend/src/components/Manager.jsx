import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = ({ token, setToken }) => {
  // const [token, setToken] = useState("");
  const [form, setForm] = useState({ site: "", username: "", passwords: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  // ✅ On mount check token
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      getPasswords(storedToken);
    }
  }, [token]);

  // ✅ Fetch passwords for current user
  const getPasswords = async (userToken) => {
    try {
      const res = await fetch("http://localhost:3000/api/passwords", {
        headers: { token: userToken },
      });
      const passwords = await res.json();
      setPasswordArray(passwords);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Copy text
  const copyText = (text) => {
    toast("Copied!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  // ✅ Save new password
  const savePassword = async () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.passwords.length > 3
    ) {
      const newPass = { ...form, id: uuidv4() };
      setPasswordArray([...passwordArray, newPass]);

      try {
        await fetch("http://localhost:3000/api/passwords", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          body: JSON.stringify(newPass),
        });
        setForm({ site: "", username: "", passwords: "" });
        toast("Save Password!", {
          position: "top-right",
          autoClose: 1000,
          theme: "dark",
          transition: Bounce,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      toast("Password not saved!");
    }
  };

  // ✅ Edit password
  const editPassword = (id) => {
    setForm({ ...passwordArray.filter((i) => i.id === id)[0], id: id });
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  // ✅ Delete password
  const deletePassword = async (id) => {
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    try {
      await fetch(`http://localhost:3000/api/passwords/${id}`, {
        method: "DELETE",
        headers: { token: token },
      });
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        theme="dark"
        transition={Bounce}
      />

      <div
        id="manager"
        className="p-4  md:px-40 md:py-16 bg-gray-200 my-14 mx-10  rounded-xl shadow-2xl "
      >
        <div className="logo justify-center items-center text-center flex font-bold text-4xl">
          <span className="text-green-600">&lt;</span>
          <span className="text-[#020c21] ">LⓞCK</span>
          <img
            width="40"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/40C057/lock-2.png"
            alt="lock-2"
          />
          <span className="text-green-600">IT&gt;</span>
        </div>

        <p className="text-lg text-[#020c21] text-center">
          Your own Password Manager
        </p>

        {/* Input Form */}
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website Url"
            className="rounded-full border border-[#020c21] w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-[#020c21] w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                value={form.passwords}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-[#020c21] w-full p-4 py-1"
                type="password"
                name="passwords"
                id="password"
              />
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-[#020c21] text-white rounded-full px-7 py-2 w-fit hover:bg-[#91b2fa] hover:text-[#020c21] border border-[#020c21]"
          >
            <lord-icon
              src="https://cdn.lordicon.com/ueoydrft.json"
              trigger="hover"
              colors="primary:#000000,secondary:#91b2fa,tertiary:#000000"
            ></lord-icon>
            Save Password
          </button>
        </div>

        {/* Passwords Section */}
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4 text-[#020c21]">
            Your Password
          </h2>

          {!token ? (
            <div className="bg-[#91b2fa] text-center font-bold text-4xl p-7 rounded-md border border-[#020c21] text-[#020c21] ">
             Save Your Password Here!
            </div>
          ) : (
            <div className="overflow-x-auto rounded-md mb-10">
              <table className="table-auto w-full min-w-[600px]">
                <thead className="bg-[#020c21] text-white text-sm sm:text-base">
                  <tr>
                    <th className="py-2 px-2">Site</th>
                    <th className="py-2 px-2">Username</th>
                    <th className="py-2 px-2">Password</th>
                    <th className="py-2 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-[#91b2fa] text-sm sm:text-base">
                  {passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-2 border border-white text-center">
                        <div className="flex justify-center items-center gap-1">
                          <a
                            href={item.site}
                            target="_blank"
                            className="truncate max-w-[100px] sm:max-w-none"
                          >
                            {item.site}
                          </a>
                          <div
                            className="cursor-pointer"
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/tbabdzcy.json"
                              trigger="hover"
                              colors="primary:#ffffff,secondary:#020c21"
                              style={{ width: "22px", height: "22px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="py-2 px-2 border border-white text-center">
                        <div className="flex justify-center items-center gap-1">
                          <span className="truncate max-w-[100px] sm:max-w-none">
                            {item.username}
                          </span>
                          <div
                            className="cursor-pointer"
                            onClick={() => copyText(item.username)}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/tbabdzcy.json"
                              trigger="hover"
                              colors="primary:#ffffff,secondary:#020c21"
                              style={{ width: "22px", height: "22px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="py-2 px-2 border border-white text-center">
                        <div className="flex justify-center items-center gap-1">
                          {"*".repeat(item.passwords.length)}
                          <div
                            className="cursor-pointer"
                            onClick={() => copyText(item.passwords)}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/tbabdzcy.json"
                              trigger="hover"
                              colors="primary:#ffffff,secondary:#020c21"
                              style={{ width: "22px", height: "22px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="py-2 px-2 border border-white text-center flex justify-center gap-2">
                        <span
                          className="cursor-pointer"
                          onClick={() => editPassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/cbtlerlm.json"
                            trigger="hover"
                            colors="primary:#020c21,secondary:#020c21,tertiary:#ffffff"
                            style={{ width: "22px", height: "22px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => deletePassword(item.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/sxhqklqh.json"
                            trigger="hover"
                            colors="primary:#ffffff,secondary:#020c21,tertiary:#ffffff"
                            style={{ width: "22px", height: "22px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
