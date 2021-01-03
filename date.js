
console.log(module);  // log info to see id, path, parents, etc

exports.getDate = function () {
  const today = new Date();

  // options for formatting the date how we want
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
  const today = new Date();

  // options for formatting the date how we want
  const options = {
    weekday: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}
