type Props = {
  children?: JSX.Element;
  color: string;
  border?: string;
  boxStyle?: {};
  classStyle?: string;
};

const Cardlayout = ({
  children,
  classStyle,
  color,
  border,
  boxStyle,
}: Props) => {
  return (
    <div
      className={`${classStyle} p-2  rounded-md border-transparent border-2 hover:${
        !border && `border-primary`
      } flex justify-center relative`}
      style={{ ...boxStyle, backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Cardlayout;
