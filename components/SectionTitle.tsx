interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="text-base md:text-lg text-[#1d3f61] mr-2">
        {titleNo}.
      </span>
      <span className="text-[#1d3f61]">{title}</span>
    </h2>
  );
};

export default SectionTitle;
