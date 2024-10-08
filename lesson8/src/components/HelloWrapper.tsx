import HelloWorldComponent, {
  type HelloWorldComponentProps,
} from "./HelloWorldComponent";

const HelloWrapper = (props: HelloWorldComponentProps) => {
  return (
    <div className="border p-2">
      <HelloWorldComponent {...props} />
    </div>
  );
};

export default HelloWrapper;
