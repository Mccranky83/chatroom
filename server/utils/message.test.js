let { expect } = require("expect");

let { generateMessage, generateLocationMessage } = require("./message");

describe("Generate Message", () => {
  it("should generate correct message object", () => {
    let from = "Admin",
      message = "some random text",
      messageBlock = generateMessage(from, message);

    expect(messageBlock).toMatchObject({ from, message });
  });
});

describe("Generate Geolocation Message", () => {
  it("should generate correct geolocation object", () => {
    let from = "User",
      lat = 50,
      lng = 80,
      url = `https://www.google.com/maps?q=${lat}, ${lng}`,
      messageBlock = generateLocationMessage(from, lat, lng);
    expect(typeof messageBlock.createdAt).toBe("number");
    expect(messageBlock).toMatchObject({ from, url });
  });
});
