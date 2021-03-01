import { Button } from "../Button";
import { Heading } from "../Text";
import "./Card.scss";
import { Section } from "./Subcomponents";

interface Props {
  title?: string;
  primaryButton?: {
    title: string;
    onClick?: () => void;
  };
}

interface CardSubComponents {
  Section: typeof Section;
}

export const Card: React.FC<Props> & CardSubComponents = ({
  title,
  primaryButton,
  children,
  ...rest
}) => {
  return (
    <div className="card">
      {title && (
        <div className="card-title">
          <Heading>{title}</Heading>
        </div>
      )}
      <div className="card-content">
        <ol>{children}</ol>
      </div>
      {primaryButton && (
        <div className="card-footer">
          <div className="card-footer-wrapper">
            <Button type="primary" onClick={primaryButton?.onClick}>
              {primaryButton?.title}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
Card.Section = Section;
