function stringToSlug(str) {
  // Menghapus karakter non-alfanumerik, mengganti spasi dengan tanda "-"
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}

export default stringToSlug;
