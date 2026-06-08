// assets/scripts/db.js
const db = new Dexie('GaloFrameDB');

db.version(1).stores({
  memories: '++id, title, description, date, tags, imageData, createdAt',
  users: 'id, name, username, avatar, bio',
  // futuramente: comments, likes, etc.
});

export default db;