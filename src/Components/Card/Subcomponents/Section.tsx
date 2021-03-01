import { Subheading } from "../../Text";

interface Props {
  title?: string;
}

export const Section: React.FC<Props> = ({ title, children, ...rest }) => (
  <li className="card-section">
    {title && (
      <div className="card-section-title">
        <Subheading>{title}</Subheading>
      </div>
    )}
    <div className="card-section-content">{children}</div>
  </li>
);
