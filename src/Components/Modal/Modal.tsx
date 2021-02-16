import { Heading } from "../Text";
import close from "../../Assets/close.svg";
import "./Modal.scss";

const Section: React.FC<{}> = ({ children, ...rest }) => (
  <div className="modal-section">{children}</div>
);
interface Props {
  active: boolean;
  onClose: () => void;
}

interface ModalSubComponents {
  Section: typeof Section;
}

export const Modal: React.FC<Props> & ModalSubComponents = ({
  active,
  onClose,
  children,
  ...rest
}) => {
  return (
    <div
      className={`modal-wrapper ${active ? "active" : ""}`}
      onClick={(_) => onClose()}
    >
      <div className={`modal`}>
        <div className="modal-header">
          <Heading>Title</Heading>
          <img
            className="modal-header-close"
            src={close}
            onClick={(_) => onClose()}
          />
        </div>
        <div className="modal-section-wrapper">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};
Modal.Section = Section;
