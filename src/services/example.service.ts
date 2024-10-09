export interface Example {
  id: number;
  name: string;
  age: number;
}

// Simulated in-memory "database"
let examples: Example[] = [
  { name: "Alice", age: 28, id: 1 },
  { name: "Bob", age: 40, id: 3 },
];

/**
 * Fetches example by id
 * @param exampleId
 * @returns example or null
 */
export const getExampleById = async (exampleId: number) => {
  const example = examples.find((example) => example.id === exampleId);

  if (!example) {
    return null;
  }

  return example;
};
