interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <header>
      <h2 className="text-xl font-bold">{title}</h2>
    </header>
  );
};

export default SectionHeader;
