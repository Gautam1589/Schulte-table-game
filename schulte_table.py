#Schulte Table

import random
import time

def countdown(t):
    
    while t:
        mins, secs = divmod(t, 60)
        timer = '{:02d}:{:02d}'.format(mins, secs)
        print(timer, end="\r")
        time.sleep(1)
        t -= 1
      
    print('Times Up!!')

def generate():
    matrix=random.sample(range(1,26),25)
    j=0
    for i in range(5):
        print('_____','_____','_____','_____','_____')
        print()
        print(' ',matrix[j],' ',matrix[j+1],'  ',matrix[j+2],'  ',matrix[j+3],'  ',matrix[j+4])
        j+=5
    
    print('_____','_____','_____','_____','_____')
    print()
    countdown(16)

        
if __name__=="__main__":
    print('____________SCHULTE GAME____________')
    print()
    while 1:
        ch=input('Want to play')
        if ch=='y':
            generate()
        else:
            break
    print('Thanks for playing!!')