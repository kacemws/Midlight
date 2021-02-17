import { Heading } from "../../Text";

interface Props {
  title?: string;
}

export const Section: React.FC<Props> = ({ title, children, ...rest }) => (
  <div className="modal-section">
    {title && (
      <div className="modal-section-title">
        <Heading>{title}</Heading>
      </div>
    )}
    <div className="modal-section-content">{children}</div>
  </div>
);
