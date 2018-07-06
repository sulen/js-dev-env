export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1,
            "exclusiveMinimum": true
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "number": {
            "type": "string",
            "faker": "phone.phoneNumber"
          }
        },
        "required": ["id", "name", "number"]
      }
    }
  },
  "required": ["users"]
};
