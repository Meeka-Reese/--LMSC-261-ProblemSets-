move = 0.1
r = 10  
def setup():
    size(1500, 500)
    background(20)
    noStroke()
    frameRate(30)

def drawObject(x, y, s, r):
    pushMatrix()
    translate(x, y)
    scale(s)
    fill(r, 100, 90)
    rect(0, 0, 10, 100)
    arc(-10, 10, 30, 40, 0.5, 5, CHORD)
    arc(15, 10, 30, 40, 1, 7, CHORD)
    arc(10, -15, 30, 40, 3, 8, CHORD)
    arc(-10, -15, 30, 40, 1, 6, CHORD)
    fill(30, 75, 105)
    ellipse(0, 0, 25, 25)
    popMatrix()

def draw():
    global r
    global move  
    background(20)
    cellsize = 30
    subcell = 20
    space = 0

    for row in range(10):
        for col in range(5):
            x = (row + space + move + 0.5) * cellsize
            y = (col + 0.5) * cellsize
            cellsize += 5
            drawObject(x, y, 1, r)
            for subrow in range(10):
                x = (row + space + move + 0.5) * subcell
                subcell += 5
                stroke(r)
                strokeWeight(5)
                drawObject(x, y, 1, r)
    move += .03
    if 10 < move <= 100:

        move = -1
    elif move > 100:
        move = 1
    elif move < -100:
        move = 1
    r *= 1.3
    if r >= 255:
        r = 10

    

    
