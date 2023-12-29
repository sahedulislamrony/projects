#include<stdio.h>
// Deference Between Auto and Static variable 
int f(int a) {
      
   auto int A = 5 ;
  static  int S = 6 ;

     A += a ;
     S += a ;
     printf ("\nA = %d\nS = %d \n\n",A,S);  
     return 0;

}

int main()
{
    f(5);
    f(5);
    f(5);
    f(5);
}
