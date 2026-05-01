export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
};

export const validateName = (name) => {
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters";
  return "";
};

export const validatePhone = (phone) => {
  if (!phone) return "";
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
  return "";
};

export const validatePrice = (price) => {
  if (!price) return "Price is required";
  const numPrice = parseFloat(price);
  if (isNaN(numPrice) || numPrice <= 0) return "Please enter a valid price";
  return "";
};

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === "") return `${fieldName} is required`;
  return "";
};

export const validateForm = (formData, validationRules) => {
  const errors = {};
  let isValid = true;

  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const rules = validationRules[field];
    
    for (const rule of rules) {
      const error = rule(value, field);
      if (error) {
        errors[field] = error;
        isValid = false;
        break;
      }
    }
  });

  return { isValid, errors };
};
