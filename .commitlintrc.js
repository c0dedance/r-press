module.exports = {
  extends: ['@commitlint/config-conventional'],
  // ignores: [(commit) => commit.startsWith('release')],
  ignores: [(commit) => commit.includes('release')],
}