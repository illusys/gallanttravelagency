const MAX_LENGTHS = {
    firstName: 80,
    lastName: 80,
    email: 160,
    phone: 40,
    travelInterest: 120,
    message: 2000,
  };
  
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_PATTERN = /^[+()\d\s.-]{7,40}$/;
  
  export function sanitizeText(value, maxLength = 500) {
    return String(value || '')
      .replace(/[<>]/g, '')
      .replace(/[\u0000-\u001F\u007F]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, maxLength);
  }
  
  export function validateContactPayload(payload = {}) {
    const data = {
      firstName: sanitizeText(payload.firstName, MAX_LENGTHS.firstName),
      lastName: sanitizeText(payload.lastName, MAX_LENGTHS.lastName),
      email: sanitizeText(payload.email, MAX_LENGTHS.email).toLowerCase(),
      phone: sanitizeText(payload.phone, MAX_LENGTHS.phone),
      travelInterest: sanitizeText(payload.travelInterest, MAX_LENGTHS.travelInterest),
      message: sanitizeText(payload.message, MAX_LENGTHS.message),
      company: sanitizeText(payload.company, 120),
    };
  
    const errors = {};
  
    if (!data.firstName) errors.firstName = 'First name is required.';
    if (!data.lastName) errors.lastName = 'Last name is required.';
    if (!data.email) errors.email = 'Email address is required.';
    if (data.email && !EMAIL_PATTERN.test(data.email)) errors.email = 'Enter a valid email address.';
    if (!data.phone) errors.phone = 'Phone number is required.';
    if (data.phone && !PHONE_PATTERN.test(data.phone)) errors.phone = 'Enter a valid phone number.';
    if (!data.travelInterest) errors.travelInterest = 'Travel interest is required.';
    if (!data.message) errors.message = 'Message is required.';
    if (data.message && data.message.length < 10) errors.message = 'Message must be at least 10 characters.';
    if (data.company) errors.company = 'Spam submission detected.';
  
    return {
      data,
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  }
  