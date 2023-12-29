#include<stdio.h>

int main()
{
   /* int a,b,c ;
    scanf(" %d %d %d",&a,&b,&c );
    if(a==b==c){
          printf(" All inputs are same");
          return 0;
        }
     if(a>b && a>c) 
        printf(" %d is Bigger ",a);
   
     else 
            if(b>a && b>c) 
              printf(" %d is Bigger",b);
          
        
        else 
              printf("%d is Bigger",c);
            
           */
       int f = cal();
      printf("%d",f) ;
        
      int h = ~5;
      
     
    printf("\n%d",h);
}

 int  cal(){
   int a,b,s;
   scanf("%d %d",&a,&b);
   s = a + b ;
   return s ;
}
    