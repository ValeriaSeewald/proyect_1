//Adafruit IO Config
let username = "Vale_see";
let activeKey = "key";

const IO = new AdafruitIO(username, activeKey);

IO.setLimit(1);

IO.getData("light", function(data) {
  console.log(data.feed, data.json[0].value);
});