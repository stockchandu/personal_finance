import { db } from "./db";
const tableName = process.env.REACT_APP_PERSONAL_FINANCE_TABLE_NAME;
const masterTableName = process.env.REACT_APP_MASTERKEY_TABLE_NAME;
export const apiService = {
  getMasterKey: (masterKey) =>
    db
      .from(masterTableName)
      .select("*")
      .eq(masterTableName, masterKey)
      .single(),
  getToken: (email, password) =>
    db.auth.signInWithPassword({
      email,
      password,
    }),
  createMPFData: (data) => db.from(tableName).insert([data]),
  updateMPFData: (data, id) =>
    db.from(tableName).update(data).eq("id", id).select(),
  getMPFData: () =>
    db.from(tableName).select("*").order("sectionName", { ascending: true }),
  deleteMPFData: (checkedItems) =>
    db.from(tableName).delete().in("id", checkedItems),
  downloadDocument: (bucket, document) =>
    db.storage.from(bucket).getPublicUrl(document),
};
