export const insertInfo = `insert into info (
  file_id, 
  name, 
  address, 
  file_size, 
  file_mime, 
  created_at
) values (
  UUID_TO_BIN(UUID()),?,?,?,?,NOW()); `
