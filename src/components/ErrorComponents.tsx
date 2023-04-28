import { errorComponentProps } from "@/utils/types";

const ErrorComponents = ({ message }: errorComponentProps) => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-white">
      <p>An error occured with status code {message}</p>
    </div>
  );
};

export default ErrorComponents;
