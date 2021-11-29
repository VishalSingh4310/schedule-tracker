type Props = {
  children: JSX.Element;
  color: string;
  border?: string;
};

const Cardlayout = ({ children, color, border }: Props) => {
  return (
    <div
      className={`h-36 p-2  rounded-md border-transparent border-2 hover:${
        !border && `border-primary`
      } flex justify-center relative`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Cardlayout;
