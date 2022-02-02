const Teamstats = (props) => {
  const data = props;
  const stat = data.stats.filter((stats) => stats.name !== 'rankChange');

  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.teamName}</td>
      {stat.map((stat) => (
        <td
          key={stat.name}
          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          {stat.value}
        </td>
      ))}
    </tr>
  );
};

export default Teamstats;
