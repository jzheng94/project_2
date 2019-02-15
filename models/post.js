
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]

      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]

    }
  });

  Post.associate = function(models) {
  
    // A Post can't be created without an Author due to the foreign key constraint
    // Post.belongsTo(models.user, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // }),
    
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    }),
    Post.hasMany(models.Reply, {  //for multiple replies
      foreignKey: {
        allowNull: false
      }
    })
  };

  return Post;
};
