import java.util.*;

public class jar{
    public static void main(String[] args) {
        System.out.println("Hello Java");

        int [] names = {3,5,2};
        int sumOfArray = 0;

        for (int sum = 0; sum < names.length; sum++){
            sumOfArray += names[sum];
        }

        System.out.println("Sum of array is :" + sumOfArray);


        String [] nameOfStudents = new String [3];
        Scanner input = new Scanner(System.in);
        // for(String named : nameOfStudents){
        //     System.out.println(named);
        // }

        for(int name = 0; name < nameOfStudents.length; name++){
            System.out.print("Enter names of student: ");
            nameOfStudents[name] = input.nextLine();
        }

        System.out.println(Arrays.deepToString(nameOfStudents));

    }
}