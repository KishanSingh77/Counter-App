function getTopicCount(topic) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=" +
      topic,
    true
  );

  let count = 0;
  let data = "";
  let index = 0;
  const matchString = "/" + topic + "/g";

  request.onload = function() {
    data = res.json();
    console.log(data);
  };
}

console.log(getTopicCount("pizza"));
