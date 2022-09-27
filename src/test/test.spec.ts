import { Person } from "./../Person/person";

it("should sum", () => {
  expect(2 + 2).toBe(4);
});
it("should call person.sayMyName", () => {
  const person = new Person();
  expect(person.sayMyName()).toBe("Abner");
});
