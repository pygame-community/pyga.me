import git
import os

PYGAME_GIT_URL = "https://github.com/pygame-community/pygame-ce.git"

# git.Repo.clone_from(PYGAME_GIT_URL, "dist")

os.chdir(os.path.join(os.getcwd(), "pygame"))
os.system("python setup.py docs")
