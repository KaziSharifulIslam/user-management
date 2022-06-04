interface headerProps {
    heading: string
}
const Home = ({ heading }: headerProps) => {
    let myName: string = "Sayem Khan";
    let age: number = 23;
    let isSmart: boolean = true;
    let fees: number[] = [23, 53, 56, 34, 42, 34, 56, 34];
    let students: string[] = ['sayem', 'salauddin', 'alamin', 'sohag', 'shamim'];
    let something: (string | number | boolean)[] = ['sayem', 234, true, 443, 'hello'];

    const person: { name: string, age: number, job: string, isSmart: boolean, hobby: string } = {
        name: 'Sayem',
        age: 23,
        job: 'jobless',
        isSmart: true,
        hobby: 'Walking on the nature'
    }
    // interface 
    interface Student {
        name: string,
        age: number,
        isQualified: boolean,
        hobby?: string,
        // address: string | object,
        address: string | {},
        friends: string[]
    }
    let student: Student = {
        name: 'Sohag',
        age: 23,
        isQualified: true,
        // hobby: 'watching movies',
        address: { long: 23, let: 35 },
        friends: ['sakib', 'rasel', 'sihab']
    }


    // extends Student interface
    interface Student {
        job?: boolean | string
    }
    const student2: Student = {
        name: 'Rakib Hasan',
        age: 23,
        job: true,
        address: 'Dhaka',
        isQualified: true,
        friends: ['sohan', 'siam', 'joni']
    }
    // type 
    type Person = {
        name: string,
        age: number,
        hobby: string
    }
    const person1 : Person = {
        name: 'Sohag',
        age: 22, 
        hobby: 'watching movies'
    }

    const handleAddUser = (fName: string, age: number, address: string): number => {
        const total: number = 50;
        return total;
    }

    return (
        <div>
            <h2>{heading}</h2>
        </div>
    );
};

export default Home;