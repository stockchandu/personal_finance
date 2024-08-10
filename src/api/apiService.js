import { db } from "../config/db";
const tableName = process.env.REACT_APP_PERSONAL_FINANCE_TABLE_NAME;

export const apiService = {
  getToken: async (email, password) =>
    await db.auth.signInWithPassword({
      email: email,
      password: password,
    }),
  createMPFData: async () => {},
  updateMPFData: async (data, id) =>
    await db.from(tableName).update(data).eq("id", id).select(),
  getMPFData: async () =>
    await db
      .from(tableName)
      .select("*")
      .order("sectionName", { ascending: true }),
  deleteMPFData: async (checkedItems) =>
    await db.from(tableName).delete().in("id", checkedItems),
  downloadDocument: async (bucket, document) =>
    await db.storage.from(bucket).getPublicUrl(document),
};
