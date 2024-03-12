def setup():
    size (500, 500)
    background (20)
    noStroke()
def draw():
    fill (25, 100, 90)
    rect(250, 200, 10, 100)
    arc(240, 210, 30, 40, .5, 5, CHORD)
    arc(265, 210, 30, 40, 1, 7, CHORD)
    arc(260, 185, 30, 40, 3, 8, CHORD)
    arc(240, 185, 30, 40, 1, 6, CHORD)
    fill(30, 75, 105)
    ellipse(250, 200, 25, 25)
