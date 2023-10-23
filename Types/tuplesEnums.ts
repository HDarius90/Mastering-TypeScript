// const stuff: (string | number)[] = [1, "asd", "asd"];

const color: [number, number, number] = [245, 0, 456];

type HTTPResponse = [number, string];

const response: HTTPResponse = [404, "Not found"];
// response[0] = "asd";
response.push("asd");
response.pop();
response.pop();
response.pop();

const responses: HTTPResponse[] = [
  [404, "Not found"],
  [505, "Server error"],
];

// ENUMS

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
  ERROR = 123,
}
 