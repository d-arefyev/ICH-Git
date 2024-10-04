interface User {
  name: string;
  age: number;
  address: Address;
}
type Address = {
  street: string;
  city: string;
  country: string;
};
type UserAddres = User & Address;




class ObjectTest {}


class Person extends ObjectTest {

}