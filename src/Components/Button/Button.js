import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "50px",

    left: "70%",
    top: "50%",
    // transform: 'translate(-50%, -50%)',
    textAlign: "center",
  },
  btn: {
    fontWeight: "bold",
    fontSize: "0.6rem",
    border: "none",
    marginLeft: 5,

    width: 80,
    height: 25,
    border: "10px ",
    textTransform: "uppercase",
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    cursor: "pointer",
    color: "white",
    // backgroundSize: '200%',
    backgroundColor: "#C1F59A",
    borderColor: "aliceblue",
    borderRadius: "15px",
    transition: "0.4s",
  },
});
const Button = (props) => {
  const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";
  const classes = useStyles();
  return (
    <button
      id={props.id}
      className={`${classes.btn} `}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",

  disabled: false,
};

export default Button;
