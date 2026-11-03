
#include "config.h"


// set up the 'analog' feed
AdafruitIO_Feed *analog = io.feed("light");

int lightValue = 0;


void setup() {

  // start the serial connection
  Serial.begin(115200);

  // connect to io.adafruit.com
  Serial.print("Connecting to Adafruit IO");
  io.connect();

  // wait for a connection
  while (io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  // we are connected
  Serial.println();
  Serial.println(io.statusText());
}

void loop() {
  io.run();

  //lightValue = analogRead(A2);
  lightValue = map(analogRead(A2),0, 4095, 100, 0);

  Serial.print("sending -> ");
  Serial.println(lightValue);
  analog->save(lightValue);

  delay(5000);
}

