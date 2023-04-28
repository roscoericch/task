import { Modal, Skeleton } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { postModalProps } from "@/utils/types";

const PostModal = ({ id, open, handleCancel, cancelModal }: postModalProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Record<string, string>>({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.message) {
          setData({ errorMessage: error?.message });
          return;
        } else cancelModal();
      });
  }, [id]);

  return (
    <Modal
      title={data?.title}
      open={open}
      okType="primary"
      onCancel={handleCancel}
      centered={true}
    >
      {loading ? (
        <Skeleton active />
      ) : (
        <p>{data?.body || data?.errorMessage}</p>
      )}
    </Modal>
  );
};

export default PostModal;
