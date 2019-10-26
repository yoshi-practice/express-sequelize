const Sequelize = require('sequelize');
const sequelize = new Sequelize('NodeTest', 'root', 'root', {dialect: 'mysql'});
sequelize.query("SELECT * FROM test_table").spread(
    (results, metadata) => {
        console.log(results);
        sequelize.close;
    }
)