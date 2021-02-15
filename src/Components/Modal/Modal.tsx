import "./Modal.scss";

interface Props {
  active: boolean;
  onClick: () => void;
}

export const Modal: React.FC<Props> = ({ active, onClick, ...rest }) => {
  return (
    <div
      className={`modal-wrapper ${active ? "active" : ""}`}
      onClick={(_) => onClick()}
    >
      <div className={`modal ${active ? "active" : ""}`}></div>
    </div>
  );
};
