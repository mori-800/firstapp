const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const post = await prisma.post.findUnique({where: { id:1}});
  res.render("posts/allPosts", {post});
};