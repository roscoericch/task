import axios from "axios";
import ErrorComponents from "@/components/ErrorComponents";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Inter } from "next/font/google";
import { homeProps } from "@/utils/types";
import { Skeleton } from "antd";
const PostCard = dynamic(() => import("@/components/PostCard"), {
  loading: () => <Skeleton active />,
  ssr: false,
});
const PostModal = dynamic(() => import("@/components/PostModal"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, statusCode }: homeProps) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string>("");
  const openModal = (key: string) => {
    setId(key);
    setOpen(true);
    return;
  };
  const closeModal = () => {
    setOpen(false);
    setId("");
    return;
  };
  const cancelModal = () => {
    setOpen(false);
    return;
  };

  if (statusCode) {
    return <ErrorComponents message={statusCode} />;
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 mx-auto ${inter.className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 max-w-[1400px] mx-auto w-fit">
        {data.map((element) => (
          <PostCard
            key={element?.id}
            title={element?.title}
            user={element?.userId}
            onClick={() => openModal(element?.id)}
          />
        ))}
      </div>
      <PostModal
        open={open}
        id={id}
        handleCancel={closeModal}
        cancelModal={cancelModal}
      />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
    return {
      props: { data: res.data },
    };
  } catch (error: any) {
    return { props: { statusCode: error.status || 500 } };
  }
}
