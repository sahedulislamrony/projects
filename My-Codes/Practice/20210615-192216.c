#include<stdio.h>

int main()
{
   int a = 4 , b,c ,d;
   printf("%d",a);
   b = a++;
   c = ++a;
   /*  printf("%d\n", a );
     printf("%d\n", b );
     printf("%d\n", c );
    */
    if(b>=10)
    { d = b + c ;}
    else
     {d = b - c ; }
    
    printf("%d",d);
}