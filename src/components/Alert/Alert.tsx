import "./index.scss";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { AlertTypes } from "../../types";

interface Props {
  title: string;
  type: AlertTypes;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ title, type, icon, description, children }: Props) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
