export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // This reads the file and adds the 'data:image/...' prefix
    reader.onload = () => {
        const result = reader.result as string;
        const base64String = result.split(',')[1]; // Extract base64 part after the comma
        resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};