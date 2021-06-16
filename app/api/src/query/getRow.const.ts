export const getRow = `SELECT name, file_size, file_mime FROM info WHERE file_id = UUID_TO_BIN(?);`
