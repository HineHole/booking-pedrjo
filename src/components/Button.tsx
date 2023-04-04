import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const Button: React.FC<Props> = ({ to, children }) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};
export default Button;
