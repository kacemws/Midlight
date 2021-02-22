import { Introduction } from "./Introduction";
import "../App.scss";
import "../Styles/colors.scss";

// import "../index.css";
export default {
  title: "Introduction",
  component: Introduction,
};

export const Intro: React.VFC<{}> = () => <Introduction />;
