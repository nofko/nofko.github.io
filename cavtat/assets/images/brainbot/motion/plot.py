import matplotlib.pyplot as plt
import numpy as np


data = np.genfromtxt("bot1.txt",delimiter=" ")

t = data[:,0]
x = data[:,1]
y = data[:,2]


plt.plot(x,y)


plt.show()
