exports.settings = {
  kind: "collectionType",
  collectionName: "bscinfoteches",
  info: {
    name: "name",
    description: "All information info tech for bsc"
  },
  options: {
    increments: true,
    timestamps: true,
    draftAndPublish: false
  },
  attributes: {
    code: {
      type: "string"
    },
    title: {
      type: "string"
    },
    unit: {
      type: "string"
    },
    level: {
      type: "string"
    },
    semester: {
      type: "string"
    },
    status: {
      type: "string"
    },
    fee: {
      type: "integer"
    }
  }
};
