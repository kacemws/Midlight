import "./Modal.scss";

const Section: React.FC<{}> = ({ children, ...rest }) => (
  <div className="modal-section">{children}</div>
);
interface Props {
  active: boolean;
  onClick: () => void;
}

interface ModalSubComponents {
  Section: typeof Section;
}

export const Modal: React.FC<Props> & ModalSubComponents = ({
  active,
  onClick,
  children,
  ...rest
}) => {
  return (
    <div
      className={`modal-wrapper ${active ? "active" : ""}`}
      onClick={(_) => onClick()}
    >
      <div className={`modal ${active ? "active" : ""}`}>
        <div className="modal-header"></div>
        <div className="modal-section-wrapper">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};
Modal.Section = Section;
