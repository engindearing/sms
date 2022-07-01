const isValidPhoneNumber = (phone: string | null | undefined) => {
  if (typeof phone !== "string") return false;

  let phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  return phoneNumberRegex.test(phone);
};

export default isValidPhoneNumber;
