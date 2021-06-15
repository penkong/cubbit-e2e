export const selectById = `SELECT BIN_TO_UUID(file_id) as file_id FROM info WHERE file_size=?;`
