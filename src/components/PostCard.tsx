import { Space, Card, Avatar } from "antd";
import { postCardProps } from "@/utils/types";
import { AiOutlineUser } from "react-icons/ai";

const PostCard = ({ user, title, key, onClick }: postCardProps) => {
  return (
    <Space key={key} direction="vertical" size={16}>
      <Card
        size="default"
        title={
          <div className="flex items-center gap-1">
            <Avatar size="default">
              <div className="flex items-center m-auto">
                <AiOutlineUser className="text-center text-[2.5rem] block" />
              </div>
            </Avatar>
            <div>
              <p className="text-[0.8rem] font-[500]">{`user${user}`}</p>
            </div>
          </div>
        }
        extra={
          <p onClick={onClick} className="cursor-pointer hover:text-blue-700">
            more
          </p>
        }
        className="cursor-pointer w-[80%] mx-auto bg-white"
        onClick={onClick}
      >
        <p className="truncate">{title}</p>
      </Card>
    </Space>
  );
};

export default PostCard;
