const Button = (props) => {
  return (
    <>
      <a href="">
        <span className={props.value}></span>
        <span>{props.value}</span>
      </a>
    </>
  );
};

export default Button;
