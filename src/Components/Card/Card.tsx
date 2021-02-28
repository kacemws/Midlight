import "./Card.scss";

interface Props {}

export const Card: React.FC<Props> = ({}) => {
  return (
    <div className="card">
      <div className="card-title"></div>
      <div className="card-content">
        <ol>
          <li>a</li>
          <li>abcdef</li>
        </ol>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};
