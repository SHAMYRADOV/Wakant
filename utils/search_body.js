const { Op } = require("sequelize");

const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.search_body = (keyword) => {
  let keywords = [
    `%${keyword}%`,
    `%${keyword.toLowerCase()}%`,
    `%${capitalize(keyword.toLowerCase())}%`,
  ];

  return {
    [Op.or]: [
      {
        profession: {
          [Op.like]: {
            [Op.any]: keywords,
          },
        },
      },
      // {
      //   name: {
      //     [Op.like]: {
      //       [Op.any]: keywords,
      //     },
      //   },
      // },
    ],
  };
};
