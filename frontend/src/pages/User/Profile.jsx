import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { setCredientials } from "../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { useProfileMutation } from "../redux/api/userApiSlice";
import { hashSync } from "bcryptjs";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(
    () => {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
    },
    userInfo.email,
    userInfo.username
  );

  const dispatch = useDispatch();

const submitHandler = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    toast.error("Password doesnot match");
  } else {
    try {
      const res = await updateProfile({ _id:userInfo._id, username, email, password }).unwrap();
      dispatch(setCredientials({...res}));
      toast.success("Profile updated successfully ");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.message);
    }
  }
};

  return (
    <div className="container mx-auto p-4 mt-[6rem]">
      <div className="flex justify-center align-center md:flex md:space-x-4">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input p-2 rounded-sm w-full hover:border hover:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input p-2 rounded-sm w-full hover:border hover:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input p-2 rounded-sm w-full hover:border hover:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input p-2 rounded-sm w-full hover:border hover:border-gray-300"
              />
            </div>
            <div className="flex justify-between">
              <button type="submit" className="bg-pink-500 text-white px-4 py-2 mt-2 rounded hover:bg-pink-600">
                Update
              </button>

              <Link to="/user-orders" className="bg-pink-600 text-white px-4 py-2 mt-2 rounded hover:bg-pink-700">My Orders</Link>
            </div>

            {loadingUpdateProfile && <Loader />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
