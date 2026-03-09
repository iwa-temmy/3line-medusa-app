const TopHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="pt-5 pb-4">
      <h1 className="text-3xl font-medium text-gray-900 capitalize">{title}</h1>
      <article className="text-gray-500 text-base">{description}</article>
    </header>
  );
};

export default TopHeader;
