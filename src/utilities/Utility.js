const jobLoader = async (id) => {
  const unFilteredData = await fetch("../../data.json");
  const filteredData = await unFilteredData.json();
  const item = filteredData.find((item) => item.id === parseInt(id));
  return item;
};
export default jobLoader;
