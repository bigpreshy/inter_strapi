exports.data = {
  routes: [
    {
      method: "GET",
      path: "/names",
      handler: "name.find",
      config: {
        policies: []
      }
    },
    {
      method: "GET",
      path: "/names/count",
      handler: "name.count",
      config: {
        policies: []
      }
    },
    {
      method: "GET",
      path: "/names/:id",
      handler: "name.findOne",
      config: {
        policies: []
      }
    },
    {
      method: "POST",
      path: "/names",
      handler: "name.create",
      config: {
        policies: []
      }
    },
    {
      method: "PUT",
      path: "/names/:id",
      handler: "name.update",
      config: {
        policies: []
      }
    },
    {
      method: "DELETE",
      path: "/names/:id",
      handler: "name.delete",
      config: {
        policies: []
      }
    }
  ]
};
