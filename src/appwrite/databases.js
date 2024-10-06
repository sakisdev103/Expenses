import { databases } from "./config";
import { ID } from "appwrite";
import { Models, Query } from "appwrite";

const collections = [
  {
    dbId: process.env.REACT_APP_DATABASE_ID,
    id: process.env.REACT_APP_EXPENSES_ID,
    name: "expenses",
    // queries: [Query.orderAsc("exercise"), Query.limit(50), Query.offset(0)],
  },
  // {
  //   dbId: import.meta.env.VITE_DATABASE_ID,
  //   id: import.meta.env.VITE_COLLECTION_CATEGORIES_ID,
  //   name: "categories",
  // },
];
const db = {};

collections.forEach((col) => {
  db[col.name] = {
    create: (payload) =>
      databases.createDocument(col.dbId, col.id, ID.unique(), payload),
    update: (id, payload) =>
      databases.updateDocument(col.dbId, col.id, id, payload),
    get: (id) => databases.getDocument(col.dbId, col.id, id),
    delete: (id) => databases.deleteDocument(col.dbId, col.id, id),
    list: () => databases.listDocuments(col.dbId, col.id, col.queries),
  };
});

export default db;
