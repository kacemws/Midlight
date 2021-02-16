import "./Modal.scss";

const Section: React.FC<{}> = (props) => <div className="modal-section"></div>;
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
      <div className={`modal ${active ? "active" : ""}`}>{children}</div>
    </div>
  );
};
Modal.Section = Section;
