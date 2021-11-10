import PropTypes from "prop-types";

// const Button = (props) => {
const Button = ({ color, text, onClick }) => {
  //   const onClick = (e) => {
  //       console.log(e)
  //   }

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
