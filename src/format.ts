/**
 * parse and format the input curl command
 * @param input original curl content
 */
export const format = (input: string): string => {
  return input.replace(
    /(\s-[A-Z]|--\b\w*\b)(\s\'(.*?)\')?/gm,
    match => match + " \\\n"
  );
};

/**
 * Format a range of text from the curl command
 * @param text the text to format
 * @returns formatted text
 */
export const formatCurlCommand = (text: string): string => {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // Trim the input and apply formatting
  const trimmed = text.trim();
  return format(trimmed);
};
