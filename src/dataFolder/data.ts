import image1 from '../../asset/image/imgDog1.jpg'
interface EmployeeProp{
    id: number,
    name: string,
    age: number,
    department: string,  
    image:string
}
export const employees:EmployeeProp[] = [

    {
      id: 1,
      name: "John Smith",
      age: 35,
      department: "Engineering",
         image: image1
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 28,
      department: "Marketing",
      image: image1
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 42,
      department: "Finance",
      image: image1
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 31,
      department: "Human Resources",
      image: image1
    },
    {
      id: 5,
      name: "David Wilson",
      age: 39,
      department: "Engineering",
      image: image1
    },
    {
      id: 6,
      name: "Jessica Taylor",
      age: 27,
      department: "Sales",
      image: image1
    },
    {
      id: 7,
      name: "Daniel Martinez",
      age: 45,
      department: "Operations",
      image: image1
    },
    {
      id: 8,
      name: "Lisa Anderson",
      age: 33,
      department: "Marketing",
      image: image1
    },
    {
      id: 9,
      name: "Robert Clark",
      age: 38,
      department: "Customer Support",
      image: image1
    },
    {
      id: 10,
      name: "Amanda White",
      age: 29,
      department: "Product Management",
      image: image1
    }
  ];