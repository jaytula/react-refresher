function Backdrop({onCancel}: {onCancel: () => void}) {
  return <div className="backdrop" onClick={onCancel} />;
}

export default Backdrop;
