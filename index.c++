from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *
import sys

angle = 0

def init():
    glClearColor(0.0, 0.0, 0.0, 1.0)
    glEnable(GL_DEPTH_TEST)  # Enable depth test
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    gluPerspective(45, 1.0, 0.1, 500.0)  # Perspective projection
#   glOrtho(left, right, bottom, top, near, far)

    #glOrtho(-5, 5, -5, 5, 0.1, 50.0)

    glMatrixMode(GL_MODELVIEW)

def draw_cube():
    glBegin(GL_QUADS)

    # Front (red)
    glColor3f(1, 0, 0)
    glVertex3f(-1, -1,  1)
    glVertex3f( 1, -1,  1)
    glVertex3f( 1,  1,  1)
    glVertex3f(-1,  1,  1)

    # Back (green)
    glColor3f(0, 1, 0)
    glVertex3f(-1, -1, -1)
    glVertex3f(-1,  1, -1)
    glVertex3f( 1,  1, -1)
    glVertex3f( 1, -1, -1)

    # Top (blue)
    glColor3f(0, 0, 1)
    glVertex3f(-1, 1, -1)
    glVertex3f(-1, 1,  1)
    glVertex3f( 1, 1,  1)
    glVertex3f( 1, 1, -1)

    # Bottom (yellow)
    glColor3f(1, 1, 0)
    glVertex3f(-1, -1, -1)
    glVertex3f( 1, -1, -1)
    glVertex3f( 1, -1,  1)
    glVertex3f(-1, -1,  1)

    # Right (cyan)
    glColor3f(0, 1, 1)
    glVertex3f(1, -1, -1)
    glVertex3f(1,  1, -1)
    glVertex3f(1,  1,  1)
    glVertex3f(1, -1,  1)

    # Left (magenta)
    glColor3f(1, 0, 1)
    glVertex3f(-1, -1, -1)
    glVertex3f(-1, -1,  1)
    glVertex3f(-1,  1,  1)
    glVertex3f(-1,  1, -1)

    glEnd()

def display():
    global angle
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
    glLoadIdentity()
    glTranslatef(0.0, 0.0, -6.0)
    glRotatef(angle, 1, 1, 0)
    draw_cube()
    glutSwapBuffers()

def update(value):
    global angle
    angle += 1
    if angle > 360:
        angle -= 360
    glutPostRedisplay()
    glutTimerFunc(16, update, 0)

def main():
    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH)
    glutInitWindowSize(600, 600)
    glutCreateWindow(b"3D Cube")

    init()
    glutDisplayFunc(display)
    glutTimerFunc(0, update, 0)
    glutMainLoop()

if __name__ == "__main__":
    main(). Give heading