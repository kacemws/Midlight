import { Heading } from "../Text";
import close from "../../Assets/close.svg";
import "./Modal.scss";
import { Button } from "../Button";
import { Section } from "./Subcomponents";

interface Props {
  active: boolean;
  onClose: () => void;
  title?: string;
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
  title = "",
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
          <Heading>{title}</Heading>
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
                  ? "secondary"
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
