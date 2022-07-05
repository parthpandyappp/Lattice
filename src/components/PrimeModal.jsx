import { useSelector } from "react-redux";
import { PostUpdateModal } from "./PostUpdateModal";
import { PostDeleteModal } from "./PostDeleteModal";
import { CommentUpdateModal } from "./CommentUpdateModal";
import { CommentDeleteModal } from "./CommentDeleteModal";
import { ProfileUpdateModal } from "./ProfileUpdateModal";

const PrimeModal = ({ postData }) => {
  const { modalChildren } = useSelector((state) => state.modal);
  const show = useSelector((state) => state.modal.modalVisible);

  return !show ? null : (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen bg-amber-100 bg-opacity-50">
      {modalChildren === "ProfileUpdate" ? <ProfileUpdateModal /> : null}
      {modalChildren === "PostUpdate" ? (
        <PostUpdateModal postData={postData} />
      ) : null}
      {modalChildren === "DeletePost" ? <PostDeleteModal /> : null}
      {modalChildren === "commentUpdate" ? <CommentUpdateModal /> : null}
      {modalChildren === "commentDelete" ? <CommentDeleteModal /> : null}
    </div>
  );
};

export { PrimeModal };
