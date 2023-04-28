export type navProps = {
  children: React.ReactNode;
};

export type homeProps = {
  data: Array<Record<string, string>>;
  statusCode: number;
  PostCard: JSX.Element;
};

export type errorComponentProps = {
  message: number;
};

export type postCardProps = {
  key: string;
  title: string;
  user: string;
  onClick: () => void;
};

export type postModalProps = {
  id: string;
  open: boolean;
  handleCancel: () => void;
  cancelModal: () => void;
};
