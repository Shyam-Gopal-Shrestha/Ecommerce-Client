import { useState } from "react";

const handleonChange = (e, formData, setFormData) => {
  const { name, value, files, type } = e.target;

  setFormData({
    ...formData,
    [name]: value,
    image: type === "file" ? files?.[0] : formData.image,
  });
};
const useForm = (initialformData) => {
  const [formData, setFormData] = useState(initialformData);

  return {
    handleonChange: (e) => handleonChange(e, formData, setFormData),
    setFormData,
    formData,
  };
};

export default useForm;
