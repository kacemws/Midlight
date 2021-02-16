import { Heading } from "../Text";
import close from "../../Assets/close.svg";
import "./Modal.scss";
import { Button } from "../Button";

const Section: React.FC<{}> = ({ children, ...rest }) => (
  <div className="modal-section">{children}</div>
);
interface Props {
  active: boolean;
  onClose: () => void;
  primaryButton?: {
    title: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    title: string;
    type: "normal" | "warning";
    onClick?: () => void;
  };
}

interface ModalSubComponents {
  Section: typeof Section;
}

export const Modal: React.FC<Props> & ModalSubComponents = ({
  active,
  onClose,
  children,
  primaryButton,
  secondaryButton,
  ...rest
}) => {
  return (
    <div
      className={`modal-wrapper ${active ? "active" : ""}`}
      onClick={(_) => onClose()}
    >
      <div
        className={`modal`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <Heading>Title</Heading>
          <img
            className="modal-header-close"
            src={close}
            onClick={(_) => onClose()}
          />
        </div>
        <div className="modal-section-wrapper">{children}</div>
        <div className="modal-footer">
          {secondaryButton && (
            <Button
              type={
                secondaryButton.type == "normal"
                  ? "tertiary"
                  : secondaryButton?.type
              }
              onClick={secondaryButton?.onClick}
            >
              {secondaryButton?.title}
            </Button>
          )}
          {primaryButton && (
            <div className="modal-primary-button-wrapper">
              <Button type="primary" onClick={primaryButton?.onClick}>
                {primaryButton?.title}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Modal.Section = Section;
