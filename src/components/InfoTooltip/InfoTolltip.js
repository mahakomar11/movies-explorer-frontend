import goodSign from "../../images/good-sign.svg";
import badSign from "../../images/bad-sign.svg";
import './InfoTooltip.css';

function InfoTooltip(props) {
  const { ok, isOpen, onClose, message } = props;

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <img
          src={ok ? goodSign : badSign}
          alt={ok ? "ok" : "not ok"}
          className="popup__sign"
        />
        <p className="popup__message">
          {message}
        </p>
        <button
          type="button"
          area-label="Close"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default InfoTooltip;