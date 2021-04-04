import Button from "react-bootstrap/Button";

type btnType = "submit" | "button";

export interface ICustomBtn {
  name: string;
  btnFun?: Function;
  BtnType?: btnType;
}

const CustomBtn: React.FC<ICustomBtn> = ({ btnFun, BtnType, name }) => {
  const handleBtn = () => {
    btnFun && btnFun();
  };

  return (
    <Button className="customBtn" onClick={handleBtn} type={BtnType}>
      {name}
    </Button>
  );
};

export default CustomBtn;
