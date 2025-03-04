import style from "./SuccesEmail.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function SeccesEmail() {
  return (
    <div className={style.body}>
        <span></span>
      <div className={style.contenaire}>
        <h1>Merci ! </h1>
        <p>Nous vous recontacterons dans les prochaines 24h</p>
        <FaCheckCircle className={style.logo} />
      </div>
    </div>
  );
}
