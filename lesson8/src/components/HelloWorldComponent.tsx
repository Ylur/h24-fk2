import NameWrapper, { type NameProps } from "./NameWrapper";

export type HelloWorldComponentProps = {
  text: string;
  age: number;
  height: number;
} & NameProps;

const HelloWorldComponent = ({
  text,
  age,
  height,
  ...rest
}: HelloWorldComponentProps) => {
  // Here
  return (
    <div className="border h-40 w-40">
      <p>{text}</p>
      <p>{age}</p>
      <p>{height}</p>
      <NameWrapper {...rest} />
    </div>
  );
};

export default HelloWorldComponent;
