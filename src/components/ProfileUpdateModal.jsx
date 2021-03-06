import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, toggleModal, profileUpdate } from "../features";

const ProfileUpdateModal = () => {
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(null);
  const { userProfile, userProfileLoading } = useSelector(
    (state) => state.userProfile
  );

  const [creds, setCreds] = useState(
    userProfileLoading && {
      username: userProfile.username,
      firstName: userProfile.firstName,
      bio: userProfile.bio,
      plink: userProfile?.plink,
    }
  );

  return (
    userProfileLoading && (
      <div className="border-2 border-slate-600 w-5/8 p-3 rounded-md bg-amber-100">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Profile Details</h1>
          <MdClose
            className="text-lg cursor-pointer"
            onClick={() => dispatch(toggleModal({ type: "ProfileUpdate" }))}
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
            Portfolio link
          </label>
          <input
            name="plink"
            type="url"
            value={creds.plink}
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) =>
              setCreds((prev) => ({ ...prev, plink: e.target.value }))
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
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="font-medium">
            Update profile picture
          </label>
          <input
            name="profile-pic"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setSelectedImg(e.target.files[0])}
          />
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
                  avatar: selectedImg
                    ? URL.createObjectURL(selectedImg)
                    : userProfile?.avatar,
                  plink: creds.plink,
                })
              );
              dispatch(
                profileUpdate({
                  username: creds.username,
                  firstName: creds.firstName,
                  bio: creds.bio,
                  avatar: selectedImg
                    ? URL.createObjectURL(selectedImg)
                    : userProfile?.avatar,
                  plink: creds.plink,
                })
              );
              dispatch(toggleModal({ type: "ProfileUpdate" }));
            }}
          >
            Update
          </button>
        </div>
      </div>
    )
  );
};

export { ProfileUpdateModal };
