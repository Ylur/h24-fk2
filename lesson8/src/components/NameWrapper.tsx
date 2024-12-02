export type NameProps = {
  name: string;
};

const NameTwice = (props: NameProps) => {
  const twoTimesName = `${props.name}x1 ${props.name}x2`; // if name === 'Gunnsteinn' => 'Gunnsteinnx1 Gunnsteinnx2'
  return <p>{twoTimesName}</p>;
};

const NameWrapper = (props: NameProps) => {
  return (
    <div className="border p-4">
      <NameTwice {...props} />
    </div>
  );
};

export default NameWrapper;
