#include<stdio.h>
#include <conio.h>
int main()
{
   // For find keyboard signal 

  int a,i ;
  while(i<=26) {

    a = getch();
    printf("%c = %d \n",a,a);
    i++ ;

}
}