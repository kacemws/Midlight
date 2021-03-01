import { Heading } from "../Text";
import "./Card.scss";
import { Section } from "./Subcomponents";

interface Props {
  title?: string;
}

interface CardSubComponents {
  Section: typeof Section;
}

export const Card: React.FC<Props> & CardSubComponents = ({
  title,
  children,
  ...rest
}) => {
  return (
    <div className="card">
      <div className="card-title">
        <Heading>{title}</Heading>
      </div>
      <div className="card-content">
        <ol>{children}</ol>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};
Card.Section = Section;
