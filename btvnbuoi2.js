class Student{
    classroom;
    name;
    age;
    hometown;
    constructor(classroom,name,age,hometown){
        this.classroom = classroom;
        this.name =name;
        this.age = age;
        this.hometown = hometown;
    }
    hienthi(){
        console.log(`Class: ${this.classroom}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Hometown: ${this.hometown}`);
        console.log("................")
    }
}
class Fun{
    classroom;
    name;
    Studentlist;
    constructor(){
        this.Studentlist=[];
        this.name = name;
    }
    show(){
        this.Studentlist.map((student) => student.hienthi());
        // map là một cấu trúc dữ liệu cho phép lưu trữ dữ liệu theo kiểu key-value, tương tự như object.
    }
    them(student){
        this.Studentlist.push(student);
    }
   timtheoten(name){
       this.Studentlist.filter((student) =>student.name === name)
       .map((student) => student.hienthi());
   }
   timtheolop(classroom){
       this.Studentlist.filter((student)=> student.classroom === classroom)
       .map((student) => student.hienthi());
   }
   timteoquequan(hometown){
       this.Studentlist.filter((student)=> student.hometown === hometown)
       .map((student) => student.hienthi());
   }
   timtuoi(age){
       this.Studentlist.filter((student)=> student.age === age)
       .map((student) => student.hienthi());
   }
   tim18tuoiquehanoi(){
    this.Studentlist.filter((student)=> student.age === 18 && student.hometown ==="Hanoi")
    .map((student) => student.hienthi());
   }
    
}
const fun = new Fun()
const student1 = new Student(13,"Hai",19,"HaTay");
const student2 = new Student(13,"Quynh",19,"ThaiNguyen");
const student3 = new Student(11,"Huyen",17,"Hanoi");
const student4 = new Student(13,"chi",18,'Hanoi');
const student5 = new Student(9,"Duc",15,"Vinhphuc")
fun.them(student1);
fun.them(student2);
fun.them(student3);
fun.them(student4);
fun.them(student5);
fun.show();
console.log("danh sach hs 15 tuoi")
fun.timtuoi(15);
console.log("sinh vien ten quynh")
fun.timtheoten("Quynh");
console.log("sinh vien 18 tuoi va o ha noi")
fun.tim18tuoiquehanoi();
console.log("sinh vien lop 13");
fun.timtheolop(13);

 