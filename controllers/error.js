

async function giveError(req, res) {
 throw new Error('Internal server error');
}

module.exports = {
  giveError,
}