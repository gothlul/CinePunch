
export type AgeRating = {
  age: number
  color: string
};

const livre: AgeRating = {
  age: 0,
  color: "#4CAF50",
};

const y10: AgeRating = {
  age: 10,
  color: "#2880ED",
};

const y12: AgeRating = {
  age: 12,
  color: "#FF9800",
};

const y14: AgeRating = {
  age: 14,
  color: "#F44336",
};

const y16: AgeRating = {
  age: 16,
  color: "#9C27B0",
};

const y18: AgeRating = {
  age: 18,
  color: "#000000",
};

export default { livre, y10, y12, y14, y16, y18 }