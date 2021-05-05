import { MouseEventHandler } from "react";

function Modal({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const cancelHandler: MouseEventHandler<HTMLButtonElement> = function () {
    onCancel();
  };
  const confirmHandler: MouseEventHandler<HTMLButtonElement> = function () {
    onConfirm();
  };
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
