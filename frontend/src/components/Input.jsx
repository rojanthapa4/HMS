const Input = ({ label, ...props }) => (
  <div className="input-group">
    <label>{label}</label>
    <input {...props} />
  </div>
);

export default Input;
