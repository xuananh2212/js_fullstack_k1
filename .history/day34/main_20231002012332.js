const getUrl = async () => {
  const response = await fetch("https://ncr72g-8080.csb.app/todos");
  const data = await response.json();
  console.log(data);
};

getUrl();
