import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        List<Student> list = new ArrayList<Student>();

        Student st1 = new Student("홍길동","1234");
        Student st2 = new Student("박길동","2345");
        Student st3 = new Student("이길동","3456");

        list.add(st1);
        list.add(st2);
        list.add(st3);

        Scanner sc = new Scanner(System.in);
        
        while(true) {
            System.out.println("계속 검색하려면 y 종료하려면 n");
            String input = sc.next();
            if(input.equals("y")) {
                System.out.print("이름을 입력하세요 :");
                String name = sc.next();
                for(Student stu : list) {
                    if(stu.getName().equals(name)) {
                        System.out.println("학번 : " + stu.getNo());
                        break;
                    } else {
                        System.out.println("없는 학생이네요!");
                        break;
                    }
                }
            } else if (input.equals("n")) {
                System.out.println("검색종료");
                break;
            } else {
                System.out.println("잘못된 키를 눌렀네요!");
            }
        }
        System.out.println("종료되었습니다");
        sc.close();
    }
}

class Student {
    private String name;
    private String no;

    public Student(String name, String no) {
        super();
        this.name = name;
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }
}