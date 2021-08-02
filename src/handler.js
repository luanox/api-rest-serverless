const articlerepository = require('./repository/article')

const createArticle = async (event) => {
  const article = JSON.parse(event.body);
  const result = await articlerepository.create(article)

  return {
    statusCode:201,
    body: JSON.stringify(result)
  }
}

const getArticle = async (event) => {
  const {id} = event.pathParameters;
  const article = await articlerepository.get(id);

  return {
    statusCode:200,
    body: JSON.stringify(article)
  }
}

module.exports = {
  createArticle,
  getArticle
};
