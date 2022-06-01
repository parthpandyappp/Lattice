import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { editProfile } from "../features/authSlice";
import { toggleModal } from "../features/modalSlice";
import {profileUpdate} from "../features/userProfileSlice";

const ProfileUpdateModal = ({ show, user }) => {
  const dispatch = useDispatch();

  const [creds, setCreds] = useState({
    username: user.username,
    firstName: user.firstName,
    bio: user.bio,
  });

  return !show ? null : (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen bg-amber-100 bg-opacity-50">
      <div className="border-2 border-slate-600 w-5/8 p-3 rounded-md bg-amber-100">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Profile Details</h1>
          <MdClose
            className="text-lg cursor-pointer"
            onClick={() => dispatch(toggleModal())}
          />
        </div>

        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            value={creds.username}
            className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="font-medium">
            FirstName
          </label>
          <input
            name="fname"
            type="text"
            value={creds.firstName}
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="font-medium">
            Bio
          </label>
          <textarea
            name="bio"
            type="text"
            value={creds.bio}
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, bio: e.target.value }))
            }
          ></textarea>
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button
            className="text-center w-full py-1 bg-amber-200"
            onClick={() => {
              dispatch(
                editProfile({
                  username: creds.username,
                  firstName: creds.firstName,
                  bio: creds.bio,
                })
              );
              dispatch(profileUpdate({
                username: creds.username,
                firstName: creds.firstName,
                bio: creds.bio,
              }));
              dispatch(toggleModal());
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileUpdateModal };