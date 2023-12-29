#include<stdio.h>
#include <conio.h>
int main()
{
    // For find keyboard signal

    int a,i ;
    printf(" Key : Value\n\n");
    while(i<9999) {
        a = getch();

        if(a==10) {
            break ;
        }

        printf("  %c = %d \n",a,a);
        i++ ;

    }
}