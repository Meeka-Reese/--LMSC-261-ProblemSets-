def setup():
    size(500, 500)
    background(20)
    noStroke()


def drawObject(x, y, s):
    pushMatrix()
    translate(x, y)
    scale(s)
    fill(25, 100, 90)
    rect(0, 0, 10, 100)
    arc(-10, 10, 30, 40, 0.5, 5, CHORD)
    arc(15, 10, 30, 40, 1, 7, CHORD)
    arc(10, -15, 30, 40, 3, 8, CHORD)
    arc(-10, -15, 30, 40, 1, 6, CHORD)
    fill(30, 75, 105)
    ellipse(0, 0, 25, 25)
    popMatrix()
def draw():
    cellsize = 50
    for row in range(10):
        for col in range(10):
            x = (row + .5) * cellsize 
            y = (col + .5) * cellsize
            drawObject(x,y,1)
    
    
