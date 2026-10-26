

/*any doesn’t just accept all types; it turns off type checking for that value entirely.
TypeScript stops looking. So the typo compiled, ran, hit undefined at runtime, 
and crashed. The whole point of TypeScript is to catch that before you run anything, 
and any threw that away.
*/


/* ❌ BAD — `any` turns off checking, typo slips through
const handleFormData = (e: any) => {
  e.preventDefault();

  const data = new FormData(e.terget);   // no red line, crashes at runtime

  const value = Object.fromEntries(data.entries());

  return value;
};
*/

/* ✅ GOOD — real type, typo caught before you run anything
const handleFormData = (e: SubmitEvent) => {
  e.preventDefault();

  const data = new FormData(e.target as HTMLFormElement);
  //                          ^ 'terget' here would be a red line immediately

  const value = Object.fromEntries(data.entries());

  return value;
};
*/

const handleFormData = (e: any) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const value = Object.fromEntries(data.entries())

  return value;
}

it("should handel a form submit", () => {
  const form = document.createElement("form");

  form.innerHTML = ` < input name ="name" value =" John Doe"></Excercise> `;

  form.onsubmit =(e) => {
    const value = handleFormData(e);
    expect(value).toEqual({ name: "John Doe" });
  };

  form.requestSubmit();

  expect.assertions(1)
});



