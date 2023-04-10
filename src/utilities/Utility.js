const jobLoader = async (id) => {
  const unFilteredData = await fetch("/data.json");
  const filteredData = await unFilteredData.json();
  const item = filteredData.find((item) => item.id === parseInt(id));
  return item;
};
const jobApply = (id) => {
  const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  const alreadySaved = appliedJobs.find((item) => item === id);
  if (!alreadySaved) {
    appliedJobs.push(id);
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    return true;
  } else {
    return false;
  }
};
const appliedJobsLoader = async () => {
  const loadedJobs = await fetch("/data.json")
    .then((response) => response.json())
    .catch((error) => console.error(error));
  const savedObjects = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  const appliedJobs = loadedJobs.filter((apiObj) =>
    savedObjects.find((savedObj) => savedObj.id === apiObj.id)
  );
  console.log("Common objects:", appliedJobs);
  return appliedJobs;
};
export { jobLoader, jobApply, appliedJobsLoader };
